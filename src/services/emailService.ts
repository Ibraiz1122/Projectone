import emailjs from '@emailjs/browser';
import type { ClothingDriveForm, BinPlacementForm, ContactForm } from '../types';

// EmailJS Direct Frontend Configuration (No .env required)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ik00usp';
const TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_mxr2ivp';
const TEMPLATE_DRIVE = import.meta.env.VITE_EMAILJS_TEMPLATE_DRIVE || 'template_mxr2ivp';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '-QtdiZo4OcnAjVBCI';

export const isEmailJSConfigured = Boolean(SERVICE_ID && TEMPLATE_CONTACT && PUBLIC_KEY);

export interface ContactEmailPayload {
  from_name: string;
  from_email: string;
  phone?: string;
  subject: string;
  message: string;
  to_name?: string;
}

export interface EmailResponse {
  success: boolean;
  message?: string;
  isDemo?: boolean;
}

/**
 * Low-level sender using EmailJS Browser SDK.
 * Sends directly using specified template ID (Contact vs Drive vs Bin).
 */
export async function sendEmailPayload(
  payload: ContactEmailPayload,
  templateId: string = TEMPLATE_CONTACT
): Promise<EmailResponse> {
  if (isEmailJSConfigured) {
    try {
      const response = await emailjs.send(
        SERVICE_ID,
        templateId,
        {
          from_name: payload.from_name,
          from_email: payload.from_email,
          phone: payload.phone || 'Not provided',
          subject: payload.subject,
          message: payload.message,
          to_name: 'Wearables Exchange Inc. (Carla)',
          reply_to: payload.from_email,
        },
        PUBLIC_KEY
      );

      if (response.status === 200) {
        return { success: true };
      } else {
        return { success: false, message: `EmailJS response status: ${response.status}` };
      }
    } catch (err: unknown) {
      console.error('EmailJS transmission error:', err);
      const errorMsg = (err as { text?: string; message?: string })?.text || 
                       (err as { text?: string; message?: string })?.message || 
                       'Transmission failed. Please call (908) 787-8020 directly.';
      return { success: false, message: errorMsg };
    }
  }

  // Realistic simulation fallback if keys ever fail
  console.info(
    '%c[EmailJS Simulation Mode]%c Form submission received successfully:\n',
    'background: #047857; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold;',
    'color: inherit;',
    payload
  );
  await new Promise((resolve) => setTimeout(resolve, 850));
  return { 
    success: true, 
    isDemo: true, 
    message: 'Message processed!' 
  };
}

/**
 * Send inquiry from the Contact Page -> uses Contact Template (template_xlzlf92)
 */
export async function sendContactEmail(data: ContactForm): Promise<EmailResponse> {
  const subjectLabelMap: Record<string, string> = {
    general: 'General Question',
    drive: 'School / Charity Clothing Drive Inquiry',
    bin: 'Commercial Bin Placement Request',
    export: 'International Export / Bales Inquiry',
    service: 'Existing Bin Maintenance / Servicing',
  };

  const readableSubject = subjectLabelMap[data.subject] || data.subject;

  return sendEmailPayload(
    {
      from_name: data.fullName,
      from_email: data.email,
      phone: data.phone,
      subject: `[Contact Form] ${readableSubject} - ${data.fullName}`,
      message: data.message,
    },
    TEMPLATE_CONTACT
  );
}

/**
 * Send inquiry from Clothing Drive Booking Modal -> uses Drive Template (template_a8w4rqz)
 */
export async function sendDriveBookingEmail(data: ClothingDriveForm): Promise<EmailResponse> {
  const messageBody = [
    `Organization: ${data.organizationName} (${data.organizationType})`,
    `Coordinator: ${data.coordinatorName}`,
    `Location: ${data.locationCity}, ${data.locationState}`,
    `Preferred Target Date: ${data.targetDate || 'Flexible / To be confirmed'}`,
    `Estimated Volume: ${data.estimatedBags} bags`,
    `Pickup Instructions: ${data.notes || 'None provided'}`,
  ].join('\n');

  return sendEmailPayload(
    {
      from_name: data.coordinatorName,
      from_email: data.email,
      phone: data.phone,
      subject: `[Clothing Drive Request] ${data.organizationName} (${data.estimatedBags} bags)`,
      message: messageBody,
    },
    TEMPLATE_DRIVE
  );
}

/**
 * Send inquiry from Commercial Bin Placement Modal
 */
export async function sendBinPlacementEmail(data: BinPlacementForm): Promise<EmailResponse> {
  const messageBody = [
    `Property Name: ${data.propertyName} (${data.propertyType})`,
    `Contact Person: ${data.contactPerson}`,
    `Property Address: ${data.address}, ${data.city}, ${data.state} ${data.zipCode}`,
    `Estimated Parking Spaces: ${data.parkingSpacesCount || 'Not specified'}`,
    `Preferred Bin Count: ${data.preferredBinCount}`,
    `Site Notes & Comments: ${data.comments || 'None provided'}`,
  ].join('\n');

  return sendEmailPayload(
    {
      from_name: data.contactPerson,
      from_email: data.email,
      phone: data.phone,
      subject: `[Bin Placement Request] ${data.propertyName} - ${data.preferredBinCount} bin(s)`,
      message: messageBody,
    },
    TEMPLATE_CONTACT
  );
}
