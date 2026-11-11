import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    if (!process.env.RESEND_API_KEY) return NextResponse.json({ success: false, message: 'Contact service not configured.' }, { status: 503 });
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;
        const file = formData.get('file') as File | null;

        if (!name || !email || !subject || !message || [name,email,subject,message].some(v => v.length > 10000)) return NextResponse.json({success:false,message:'Invalid input.'},{status:400});
        const escapeHtml = (value: string) => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] || c));
        let attachments: { filename: string; content: Buffer }[] = [];

        // Handle attachment if present
        if (file && file.size > 0) {
            if (file.size > 5 * 1024 * 1024) return NextResponse.json({success:false,message:'Attachment too large.'},{status:413});
            const buffer = Buffer.from(await file.arrayBuffer());
            attachments.push({
                filename: file.name,
                content: buffer,
            });
        }

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['info.probetek@gmail.com'],
            subject: `New Contact Form Submission: ${subject.replace(/[\r\n]/g, ' ')}`,
            replyTo: email,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
                <br/>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
            `,
            attachments: attachments,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json(
                { success: false, message: 'Failed to send email via Resend.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error.' },
            { status: 500 }
        );
    }
}
