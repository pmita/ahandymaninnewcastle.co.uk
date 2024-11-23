// NEXT
import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com/privacy-policy'),
  title: 'Privacy Policy',
  description: 'Details of our privacy policy and how we handle your data.',
}

export default async function PrivacyPolicyPage() {
  return (
    <main className="container flex flex-col justify-start items-center p-5 gap-5  min-h-[90dvh]">
      <h2 className="font-font font-poppins text-xl text-primary text-center">Our Privacy Policy</h2>
      <p className="text-center mt-5">
        This Privacy Policy governs the manner in which refubcity.co.uk collects, uses, maintains and discloses information collected from users (each, a "User") of the https://www.refubcity.co.uk website ("Site").
      </p>
      
      <h2 className="font-font font-poppins text-xl text-primary text-center">Personal identification information</h2>
      <p className="text-center mt-5">
      We may collect personal identification information from Users in a variety of ways in connection with activities, services, features or resources we make available on our Site. Users may visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
      </p>

      <h2 className="font-font font-poppins text-xl text-primary text-center">Non-personal identification information</h2>
      <p className="text-center mt-5">
      We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
      </p>

      <h2 className="font-font font-poppins text-xl text-primary text-center">Web browser cookies</h2>
      <p className="text-center mt-5">
      Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly. How we use collected information refubcity.co.uk may collect and use Users personal information for the following purposes: To run and operate our Site We may need your information display content on the Site correctly. To send periodic emails We may use the email address to respond to their inquiries, questions, and/or other requests. How we protect your information We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site. Sharing your personal information We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above. We may share or sell information with third parties for marketing or other purposes. Sharing your personal information This Privacy Policy governs the manner in which refubcity.co.uk collects, uses, maintains and discloses information collected from users (each, a "User") of the https://www.refubcity.co.uk website ("Site").
      </p>

      <h2 className="font-font font-poppins text-xl text-primary text-center">Personal identification information</h2>
      <p className="text-center mt-5">
      We may collect personal identification information from Users in a variety of ways in connection with activities, services, features or resources we make available on our Site. Users may visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities. Non-personal identification information We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
      </p>

      <h2 className="font-font font-poppins text-xl text-primary text-center">Web browser cookies</h2>
      <p className="text-center mt-5">
        Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly. How we use collected information refubcity.co.uk may collect and use Users personal information for the following purposes: To run and operate our Site We may need your information display content on the Site correctly. To send periodic emails We may use the email address to respond to their inquiries, questions, and/or other requests. How we protect your information We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site. Sharing your personal information We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above. We may share or sell information with third parties for marketing or other purposes. Changes to this privacy policy refubcity.co.uk has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications. Your acceptance of these terms By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes. Contacting us If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us. This document was last updated on November 18, 2024 
      </p>

    </main>
  )
}