const textArea = document.getElementById('text-area');

let index = 0;
const text = `Privacy Policy

Welcome to VisionJava's Privacy Policy. This document outlines the information we collect, how we use it, and how we protect your privacy when you visit our website or use our services.

Information Collection and Use
We may collect personal information, such as your name and email address, when you voluntarily provide it to us for purposes such as subscribing to our newsletter or contacting us through the website. We use this information to communicate with you and provide the services you request. We do not share this information with third parties without your consent, except when required by law.

Cookies
We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files that are stored on your device and allow us to remember certain information. You can choose to disable cookies through your browser settings, but please note that some features of our website may not function properly without them.

Log Files
Our website collects and stores certain information automatically in log files. This information may include your IP address, browser type, operating system, referring/exit pages, and other anonymous data. We use this information to analyze trends, administer the site, track user movements, and gather demographic information for aggregate use. This data is not linked to any personally identifiable information.

Security
We take reasonable measures to protect the information you provide to us. However, please note that no data transmission over the internet or electronic storage method is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security.

Third-Party Websites
Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of those websites. We encourage you to review the privacy policies of any third-party websites you visit.

Children's Privacy
Our website is not intended for children under the age of 13. We do not knowingly collect or store personal information from children under the age of 13. If we discover that we have collected personal information from a child under the age of 13, we will promptly delete it.

Changes to this Privacy Policy
We may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised date. We encourage you to review this Privacy Policy periodically.

Contact Us
If you have any questions or concerns about our Privacy Policy, please contact us at privacy@visionjava.com.

Thank you for trusting VisionJava with your personal information. We are committed to protecting your privacy and providing a safe and secure experience on our website.`;

function typeText() {
  if (index < text.length) {
    textArea.value += text.charAt(index);
    index++;
    setTimeout(typeText, 80); // Decreased the timeout to make it type faster (50 milliseconds)
  }
}

function blinkCaret() {
  textArea.style.animation = 'blink-caret 0.75s step-end infinite';
}

typeText();
blinkCaret();
