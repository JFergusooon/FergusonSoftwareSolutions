import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ModernScheduleConsultationPopup = ({ closePopup }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        consultationDate: '',
        consultationTime: '',
        consultationType: 'Video Call',
        description: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const SERVICE_ID = 'service_33autvw';
        const TEMPLATE_ID = 'template_mqakyxo';
        const PUBLIC_KEY = '031phQOO8bcKWzLhr';

        // Keep the same email template keys used by the "Send Us a Message" form.
        const formatDate = (dateStr) => {
            if (!dateStr) return '';
            const [year, month, day] = dateStr.split('-');
            return `${month}/${day}/${year}`;
        };

        const formatTime = (timeStr) => {
            if (!timeStr) return '';
            const [hourStr, minute] = timeStr.split(':');
            let hour = parseInt(hourStr, 10);
            const ampm = hour >= 12 ? 'PM' : 'AM';
            hour = hour % 12 || 12;
            return `${hour}:${minute} ${ampm}`;
        };

        const consultationDetails = [
            `Preferred Date: ${formatDate(form.consultationDate)}`,
            `Preferred Time: ${formatTime(form.consultationTime)}`,
            `Consultation Type: ${form.consultationType}`
        ].join('\n');

        const payload = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            role: form.role,
            description: form.description,
            consultationInformation: '\n' + consultationDetails,
            from_name: 'Ferguson Software Solutions Website',
            website_name: 'Ferguson Software Solutions',
            source: 'fergusonsoftwaresolutions.com',
            subject: `New Consultation Request -> ${formatDate(form.consultationDate)} at ${formatTime(form.consultationTime)}`
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
            setSubmitted(true);
            setForm({
                name: '',
                email: '',
                phone: '',
                role: '',
                consultationDate: '',
                consultationTime: '',
                consultationType: 'Video Call',
                description: ''
            });
            setTimeout(() => {
                setSubmitted(false);
                closePopup();
            }, 1400);
        } catch (error) {
            alert('Failed to send consultation request. Please try again.');
            console.error(error?.text || error);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(8, 12, 24, 0.75)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                padding: '20px'
            }}
            onClick={closePopup}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '640px',
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    background: 'linear-gradient(155deg, #1f4ed8 0%, #5f2ca5 65%, #3d1f73 100%)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    borderRadius: '16px',
                    padding: '28px',
                    boxShadow: '0 25px 70px rgba(0,0,0,0.45)',
                    color: '#f8fbff'
                }}
            >
                <h2 style={{ margin: '0 0 8px', fontSize: '28px', fontWeight: '700' }}>
                    Schedule a Consultation
                </h2>
                <p style={{ margin: '0 0 20px', fontSize: '14px', opacity: 0.9 }}>
                    Share your preferred time and project details. We will follow up by email.
                </p>

                {submitted ? (
                    <div
                        style={{
                            borderRadius: '12px',
                            background: 'rgba(255,255,255,0.14)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            padding: '18px',
                            textAlign: 'center',
                            fontWeight: '600'
                        }}
                    >
                        Consultation request sent successfully.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '14px' }}>
                        <div style={{ display: 'grid', gap: '8px' }}>
                            <label style={{ fontSize: '14px', fontWeight: '600' }}>Full Name</label>
                            <input
                                name='name'
                                type='text'
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder='Enter your full name'
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                            <div style={{ display: 'grid', gap: '8px' }}>
                                <label style={{ fontSize: '14px', fontWeight: '600' }}>Email Address</label>
                                <input
                                    name='email'
                                    type='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder='you@example.com'
                                    style={inputStyle}
                                />
                            </div>
                            <div style={{ display: 'grid', gap: '8px' }}>
                                <label style={{ fontSize: '14px', fontWeight: '600' }}>Phone Number</label>
                                <input
                                    name='phone'
                                    type='tel'
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder='+1 (555) 000-0000'
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gap: '8px' }}>
                            <label style={{ fontSize: '14px', fontWeight: '600' }}>Role / Position</label>
                            <input
                                name='role'
                                type='text'
                                value={form.role}
                                onChange={handleChange}
                                placeholder='Owner, Manager, Product Lead, etc.'
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                            <div style={{ display: 'grid', gap: '8px' }}>
                                <label style={{ fontSize: '14px', fontWeight: '600' }}>Preferred Date</label>
                                <input
                                    name='consultationDate'
                                    type='date'
                                    value={form.consultationDate}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                />
                            </div>
                            <div style={{ display: 'grid', gap: '8px' }}>
                                <label style={{ fontSize: '14px', fontWeight: '600' }}>Preferred Time</label>
                                <input
                                    name='consultationTime'
                                    type='time'
                                    value={form.consultationTime}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gap: '8px' }}>
                            <label style={{ fontSize: '14px', fontWeight: '600' }}>Consultation Type</label>
                            <select
                                name='consultationType'
                                value={form.consultationType}
                                onChange={handleChange}
                                style={inputStyle}
                            >
                                <option>Video Call</option>
                                <option>Phone Call</option>
                                <option>In-Person</option>
                            </select>
                        </div>

                        <div style={{ display: 'grid', gap: '8px' }}>
                            <label style={{ fontSize: '14px', fontWeight: '600' }}>Project Details</label>
                            <textarea
                                name='description'
                                rows='4'
                                value={form.description}
                                onChange={handleChange}
                                required
                                placeholder='Briefly describe your project goals and requirements...'
                                style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '4px' }}>
                            <button
                                type='button'
                                onClick={closePopup}
                                style={secondaryButtonStyle}
                            >
                                Cancel
                            </button>
                            <button type='submit' disabled={isSending} style={primaryButtonStyle(isSending)}>
                                {isSending ? 'Sending...' : 'Send Consultation Request'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.25)',
    background: 'rgba(255,255,255,0.95)',
    color: '#1b1d27',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box'
};

const secondaryButtonStyle = {
    padding: '10px 18px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.4)',
    background: 'rgba(255,255,255,0.12)',
    color: '#ffffff',
    fontWeight: '600',
    cursor: 'pointer'
};

const primaryButtonStyle = (disabled) => ({
    padding: '10px 18px',
    borderRadius: '8px',
    border: 'none',
    background: disabled ? '#91a0d9' : '#ffffff',
    color: disabled ? '#f6f7ff' : '#3d2c92',
    fontWeight: '700',
    cursor: disabled ? 'not-allowed' : 'pointer'
});

export default ModernScheduleConsultationPopup;

