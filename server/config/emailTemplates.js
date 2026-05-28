const FRONTEND_URL = process.env.FRONTEND_URL;
const LOGO_URL = process.env.LOGO_URL;

export const PASSWORD_RESET_TEMPLATE = (resetLink) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Reset</title>
</head>

<body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">

  <table width="100%" cellspacing="0" cellpadding="0" style="padding:40px 15px;">
    <tr>
      <td align="center">

        <table width="600" cellspacing="0" cellpadding="0"
          style="
            background:#ffffff;
            border-radius:20px;
            padding:40px;
            box-shadow:0 4px 20px rgba(0,0,0,0.05);
          ">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:30px;">
              <a href="${FRONTEND_URL}" target="_blank">
                <img
                  src="${LOGO_URL}"
                  alt="Logo"
                  width="120"
                  style="display:block;"
                />
              </a>
            </td>
          </tr>

          <!-- Image -->
          <tr>
            <td align="center">
              <img
                src="${FRONTEND_URL}/reset-password.png"
                width="140"
                alt="Reset Password"
                style="display:block;"
              />
            </td>
          </tr>

          <!-- Heading -->
          <tr>
            <td align="center" style="padding-top:25px;">
              <h1
                style="
                  margin:0;
                  color:#111827;
                  font-size:32px;
                  font-weight:bold;
                "
              >
                Reset Your Password
              </h1>
            </td>
          </tr>

          <!-- Description -->
          <tr>
            <td align="center" style="padding-top:15px;">
              <p
                style="
                  font-size:16px;
                  color:#6b7280;
                  line-height:26px;
                  margin:0;
                "
              >
                We received a request to reset your password.
                Click the button below to securely create a new one.
              </p>
            </td>
          </tr>

          <!-- Steps -->
          <tr>
            <td style="padding-top:30px;">

              <table
                width="100%"
                cellspacing="0"
                cellpadding="0"
                style="
                  border:1px solid #e5e7eb;
                  border-radius:16px;
                  padding:30px;
                "
              >

                <tr>
                  <td
                    style="
                      padding-bottom:18px;
                      font-size:18px;
                      color:#111827;
                    "
                  >
                    ✅ Enter a new password
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding-bottom:18px;
                      font-size:18px;
                      color:#111827;
                    "
                  >
                    ✅ Confirm your password
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      font-size:18px;
                      color:#111827;
                    "
                  >
                    ✅ Submit changes securely
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- Button -->
          <tr>
            <td align="center" style="padding-top:35px;">

              <a
                href="${resetLink}"
                target="_blank"
                style="
                  background:linear-gradient(90deg,#4f46e5,#7c3aed);
                  color:#ffffff;
                  text-decoration:none;
                  padding:16px 38px;
                  border-radius:50px;
                  display:inline-block;
                  font-size:18px;
                  font-weight:bold;
                "
              >
                Reset Password
              </a>

            </td>
          </tr>

          <!-- Expiry -->
          <tr>
            <td align="center" style="padding-top:35px;">
              <p
                style="
                  font-size:14px;
                  color:#6b7280;
                  margin:0;
                "
              >
                This link is valid for one use only and expires in 2 hours.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top:20px;">
              <p
                style="
                  font-size:14px;
                  color:#9ca3af;
                  line-height:24px;
                  margin:0;
                "
              >
                If you didn’t request a password reset,
                you can safely ignore this email.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

// export const EMAIL_VERIFY_TEMPLATE = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
// <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
//   <head>
//     <meta charset="UTF-8">
//     <meta content="width=device-width, initial-scale=1" name="viewport">
//     <meta name="x-apple-disable-message-reformatting">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta content="telephone=no" name="format-detection">
//     <title></title>
//     <!--[if (mso 16)]>
//     <style type="text/css">
//     a {text-decoration: none;}
//     </style>
//     <![endif]-->
//     <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
//     <!--[if gte mso 9]>
// <noscript>
//          <xml>
//            <o:OfficeDocumentSettings>
//            <o:AllowPNG></o:AllowPNG>
//            <o:PixelsPerInch>96</o:PixelsPerInch>
//            </o:OfficeDocumentSettings>
//          </xml>
//       </noscript>
// <![endif]-->
//     <!--[if mso]><xml>
//     <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
//       <w:DontUseAdvancedTypographyReadingMail/>
//     </w:WordDocument>
//     </xml><![endif]-->
//     <!--[if !mso]><!-- -->
//     <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap">
//     <!--<![endif]-->
//   </head>
//   <body class="body">
//     <div dir="ltr" class="es-wrapper-color">
//       <!--[if gte mso 9]>
// 			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
// 				<v:fill type="tile" color="#f6f6f6"></v:fill>
// 			</v:background>
// 		<![endif]-->
//       <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper">
//         <tbody>
//           <tr>
//             <td valign="top" class="esd-email-paddings">
//               <table cellspacing="0" cellpadding="0" align="center" background class="es-header">
//                 <tbody>
//                   <tr>
//                     <td align="center" class="esd-stripe" style="background-position: 0% top">
//                       <table width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-header-body">
//                         <tbody>
//                           <tr>
//                             <td align="left" class="esd-structure es-p25t es-p35r es-p35l es-p45b es-m-p25b">
//                               <table width="100%" cellpadding="0" cellspacing="0">
//                                 <tbody>
//                                   <tr>
//                                     <td align="left" width="530" class="esd-container-frame">
//                                       <table cellspacing="0" role="presentation" width="100%" cellpadding="0">
//                                         <tbody>
//                                           <tr>
//                                             <td align="left" class="esd-block-image" style="font-size: 0">
//                                               <a target="_blank" href="https://viewstripo.email">
//                                                 <img src="https://oioftq.stripocdn.email/content/guids/CABINET_d5957dbaa6e9329676ad02814971ab4ec15a48029b5f6205ead150f98a64de66/images/align.png" alt="Logo" width="100" title="Logo">
//                                               </a>
//                                             </td>
//                                           </tr>
//                                         </tbody>
//                                       </table>
//                                     </td>
//                                   </tr>
//                                 </tbody>
//                               </table>
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//               <table align="center" cellspacing="0" cellpadding="0" class="es-content">
//                 <tbody>
//                   <tr>
//                     <td bgcolor="transparent" align="center" class="esd-stripe">
//                       <table cellspacing="0" bgcolor="#ffffff" align="center" width="600" cellpadding="0" class="es-content-body">
//                         <tbody>
//                           <tr>
//                             <td align="left" class="esd-structure es-p35r es-p35l es-p45t es-p25b es-m-p20l es-m-p20r">
//                               <table width="100%" cellspacing="0" cellpadding="0">
//                                 <tbody>
//                                   <tr>
//                                     <td width="530" valign="top" align="center" class="esd-container-frame">
//                                       <table width="100%" cellspacing="0" cellpadding="0">
//                                         <tbody>
//                                           <tr>
//                                             <td align="center" class="esd-block-image es-p25b" style="font-size: 0">
//                                               <a target="_blank" href="https://viewstripo.email">
//                                                 <img alt="Complete registration" width="165" src="https://oioftq.stripocdn.email/content/guids/CABINET_d5957dbaa6e9329676ad02814971ab4ec15a48029b5f6205ead150f98a64de66/images/group_4078181.png" title="Complete registration">
//                                               </a>
//                                             </td>
//                                           </tr>
//                                           <tr>
//                                             <td align="center" class="esd-block-text es-p20b">
//                                               <h1 class="es-m-txt-c">
//                                                 Complete registration
//                                               </h1>
//                                             </td>
//                                           </tr>
//                                           <tr>
//                                             <td align="center" class="esd-block-text es-p35b">
//                                               <p>
//                                                 After you click the button, you'll be asked to complete the following steps:
//                                               </p>
//                                             </td>
//                                           </tr>
//                                         </tbody>
//                                       </table>
//                                     </td>
//                                   </tr>
//                                   <tr>
//                                     <td width="530" valign="top" align="center" class="esd-container-frame">
//                                       <table width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="background-color: #ffffff; border-radius: 20px; border-collapse: separate; border-top: 1px solid #f5f4f4; border-right: 1px solid #f5f4f4; border-bottom: 1px solid #f5f4f4; border-left: 1px solid #f5f4f4">
//                                         <tbody>
//                                           <tr>
//                                             <td class="esd-block-menu" style="font-size: 0">
//                                               <table cellpadding="0" cellspacing="0" width="100%" class="es-menu">
//                                                 <tbody>
//                                                   <tr>
//                                                     <td align="left" valign="top" width="100.00%" class="es-p10b es-p35l es-p35r es-p35t esd-block-menu-item">
//                                                       <div>
//                                                         <a href="https://viewstripo.email" target="_blank" style="font-size: 20px">
//                                                           <img alt="" width="30" src="https://oioftq.stripocdn.email/content/guids/CABINET_d5957dbaa6e9329676ad02814971ab4ec15a48029b5f6205ead150f98a64de66/images/group_4078179.png" title="Enter a new password" class="es-p15r">
//                                                           Enter a new password
//                                                         </a>
//                                                       </div>
//                                                     </td>
//                                                   </tr>
//                                                 </tbody>
//                                               </table>
//                                             </td>
//                                           </tr>
//                                           <tr>
//                                             <td class="esd-block-menu" style="font-size: 0">
//                                               <table cellpadding="0" cellspacing="0" width="100%" class="es-menu">
//                                                 <tbody>
//                                                   <tr>
//                                                     <td align="left" valign="top" width="100.00%" class="es-p35r es-p10b es-p35l es-p5t esd-block-menu-item">
//                                                       <div>
//                                                         <a target="_blank" href="https://viewstripo.email" style="font-size: 20px">
//                                                           <img title="Confirm your new password" alt="" width="30" src="https://oioftq.stripocdn.email/content/guids/CABINET_d5957dbaa6e9329676ad02814971ab4ec15a48029b5f6205ead150f98a64de66/images/group_40781791.png" class="es-p15r">
//                                                           Confirm your new password
//                                                         </a>
//                                                       </div>
//                                                     </td>
//                                                   </tr>
//                                                 </tbody>
//                                               </table>
//                                             </td>
//                                           </tr>
//                                           <tr>
//                                             <td class="esd-block-menu" style="font-size: 0">
//                                               <table cellspacing="0" width="100%" cellpadding="0" class="es-menu">
//                                                 <tbody>
//                                                   <tr>
//                                                     <td valign="top" width="100.00%" align="left" class="es-p5t es-p35r es-p35l es-p40b esd-block-menu-item">
//                                                       <div>
//                                                         <a target="_blank" href="https://viewstripo.email" style="font-size: 20px">
//                                                           <img title="Click Submit" alt="" width="30" src="https://oioftq.stripocdn.email/content/guids/CABINET_d5957dbaa6e9329676ad02814971ab4ec15a48029b5f6205ead150f98a64de66/images/group_40781792.png" class="es-p15r">
//                                                           Click Submit
//                                                         </a>
//                                                       </div>
//                                                     </td>
//                                                   </tr>
//                                                 </tbody>
//                                               </table>
//                                             </td>
//                                           </tr>
//                                           <tr>
//                                             <td align="left" class="esd-block-button es-p35l es-p35r es-p35b">
//                                               <!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
// 	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" style="height:54px; v-text-anchor:middle; width:229px" arcsize="50%" stroke="f"  fillcolor="#113f37">
// 		<w:anchorlock></w:anchorlock>
// 		<center style='color:#ffffff; font-family:Inter, Arial, sans-serif; font-size:20px; font-weight:400; line-height:20px;  mso-text-raise:1px'>Reset password</center>
// 	</v:roundrect></a>
// <![endif]-->
//                                               <!--[if !mso]><!-- -->
//                                               <span class="es-button-border">
//                                                 <a href="https://viewstripo.email" target="_blank" class="es-button">
//                                                   Reset password
//                                                 </a>
//                                               </span>
//                                               <!--<![endif]-->
//                                             </td>
//                                           </tr>
//                                         </tbody>
//                                       </table>
//                                     </td>
//                                   </tr>
//                                 </tbody>
//                               </table>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td align="left" class="esd-structure es-p35r es-p35b es-p35l es-p40t es-m-p20l es-m-p20r">
//                               <table width="100%" cellpadding="0" cellspacing="0">
//                                 <tbody>
//                                   <tr>
//                                     <td align="left" width="530" class="esd-container-frame">
//                                       <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
//                                         <tbody>
//                                           <tr>
//                                             <td align="center" class="esd-block-text">
//                                               <h5 class="es-m-txt-c">
//                                                 <strong>
// This link is valid for one use only. Expires in 2 hours.

// </strong>
//                                               </h5>
//                                             </td>
//                                           </tr>
//                                           <tr>
//                                             <td align="center" class="esd-block-text es-p10t">
//                                               <p>
//                                                 If you didn't request to reset your&nbsp;password, please disregard this message or contact our customer service department.
//                                               </p>
//                                             </td>
//                                           </tr>
//                                         </tbody>
//                                       </table>
//                                     </td>
//                                   </tr>
//                                 </tbody>
//                               </table>
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//               <table cellspacing="0" cellpadding="0" align="center" class="es-footer">
//                 <tbody>
//                   <tr>
//                     <td align="center" class="esd-stripe">
//                       <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" width="600" class="es-footer-body">
//                         <tbody>
//                           <tr>
//                             <td align="left" class="esd-structure es-p45 es-m-p20l es-m-p20r">
//                               <table cellpadding="0" align="right" cellspacing="0" class="es-right">
//                                 <tbody>
//                                   <tr>
//                                     <td align="left" width="510" class="esd-container-frame">
//                                       <table cellpadding="0" width="100%" cellspacing="0">
//                                         <tbody>
//                                           <tr>
//                                             <td align="center" class="esd-block-social es-p35b" style="font-size: 0">
//                                               <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
//                                                 <tbody>
//                                                   <tr>
//                                                     <td valign="top" align="center" class="es-p30r">
//                                                       <a href="https://viewstripo.email" target="_blank">
//                                                         <img height="45" title="Instagram" src="https://oioftq.stripocdn.email/content/guids/CABINET_d5957dbaa6e9329676ad02814971ab4ec15a48029b5f6205ead150f98a64de66/images/instagramfill.png" alt="Ig" width="45">
//                                                       </a>
//                                                     </td>
//                                                     <td valign="top" align="center" class="es-p30r">
//                                                       <a target="_blank" href="https://viewstripo.email">
//                                                         <img width="45" height="45" title="X" src="https://oioftq.stripocdn.email/content/guids/CABINET_d5957dbaa6e9329676ad02814971ab4ec15a48029b5f6205ead150f98a64de66/images/instagramfill1.png" alt="X">
//                                                       </a>
//                                                     </td>
//                                                     <td valign="top" align="center" class="es-p10r">
//                                                       <a href="https://viewstripo.email" target="_blank">
//                                                         <img height="45" title="TikTok" src="https://oioftq.stripocdn.email/content/guids/CABINET_d5957dbaa6e9329676ad02814971ab4ec15a48029b5f6205ead150f98a64de66/images/instagramfill2.png" alt="Tt" width="45">
//                                                       </a>
//                                                     </td>
//                                                   </tr>
//                                                 </tbody>
//                                               </table>
//                                             </td>
//                                           </tr>
//                                           <tr>
//                                             <td class="esd-block-menu" style="font-family: Inter,Arial,sans-serif; font-size: 0">
//                                               <table cellpadding="0" cellspacing="0" width="100%" class="es-menu es-menu-6862">
//                                                 <tbody>
//                                                   <tr>
//                                                     <td valign="top" width="20.00%" align="center" class="es-p5t es-p5b esd-block-menu-item">
//                                                       <div>
//                                                         <a href="https://viewstripo.email" target="_blank" style="font-family: Inter,Arial,sans-serif; font-size: 14px">
//                                                           Shop
//                                                         </a>
//                                                       </div>
//                                                     </td>
//                                                     <td align="center" valign="top" width="20.00%" class="es-p5t es-p5b esd-block-menu-item" style="border-left: 1px solid #151515">
//                                                       <div>
//                                                         <a href="https://viewstripo.email" target="_blank" style="font-size: 14px; font-family: Inter,Arial,sans-serif">
//                                                           Gift Cards
//                                                         </a>
//                                                       </div>
//                                                     </td>
//                                                     <td valign="top" width="20.00%" align="center" class="es-p5t es-p5b esd-block-menu-item" style="border-left: 1px solid #151515">
//                                                       <div>
//                                                         <a target="_blank" href="https://viewstripo.email" style="font-size: 14px; font-family: Inter,Arial,sans-serif">
//                                                           Blog
//                                                         </a>
//                                                       </div>
//                                                     </td>
//                                                     <td align="center" valign="top" width="20.00%" class="es-p5t es-p5b esd-block-menu-item" style="border-left: 1px solid #151515">
//                                                       <div>
//                                                         <a href="https://viewstripo.email" target="_blank" style="font-family: Inter,Arial,sans-serif; font-size: 14px">
//                                                           The Science
//                                                         </a>
//                                                       </div>
//                                                     </td>
//                                                     <td width="20.00%" align="center" valign="top" class="es-p5t es-p5b esd-block-menu-item" style="border-left: 1px solid #151515">
//                                                       <div>
//                                                         <a href="https://viewstripo.email" target="_blank" style="font-family: Inter,Arial,sans-serif; font-size: 14px">
//                                                           Contact Us
//                                                         </a>
//                                                       </div>
//                                                     </td>
//                                                   </tr>
//                                                 </tbody>
//                                               </table>
//                                             </td>
//                                           </tr>
//                                           <tr>
//                                             <td class="esd-block-menu es-p20b es-p30t" style="font-family: Inter,Arial,sans-serif; font-size: 0">
//                                               <table cellspacing="0" width="100%" cellpadding="0" class="es-menu">
//                                                 <tbody>
//                                                   <tr>
//                                                     <td width="50.00%" align="right" valign="top" class="es-p5t es-p5b es-p15r es-p15l esd-block-menu-item">
//                                                       <div>
//                                                         <a target="_blank" href="https://viewstripo.email" style="font-family: Inter,Arial,sans-serif; font-size: 12px">
//                                                           Privacy Policy
//                                                         </a>
//                                                       </div>
//                                                     </td>
//                                                     <td valign="top" width="50.00%" align="left" class="es-p5t es-p5b es-p15r es-p15l esd-block-menu-item" style="border-left: 1px solid #151515">
//                                                       <div>
//                                                         <a href="https://viewstripo.email" target="_blank" style="font-family: Inter,Arial,sans-serif; font-size: 12px">
//                                                           Terms of Use
//                                                         </a>
//                                                       </div>
//                                                     </td>
//                                                   </tr>
//                                                 </tbody>
//                                               </table>
//                                             </td>
//                                           </tr>
//                                           <tr>
//                                             <td align="center" class="esd-block-text es-p10t es-p10b">
//                                               <p style="line-height: 200%">
//                                                 No longer want to receive these emails? <a target="_blank" style="line-height: 200%">Unsubscribe.</a><br><u>800 Central Ave, Suite 800, New York, 12000</u>
//                                               </p>
//                                             </td>
//                                           </tr>
//                                           <tr>
//                                             <td align="center" class="esd-block-text es-p10t es-p10b">
//                                               <p>
//                                                 Can’t see this email? <a href="https://viewstripo.email" target="_blank">View online</a>
//                                               </p>
//                                             </td>
//                                           </tr>
//                                         </tbody>
//                                       </table>
//                                     </td>
//                                   </tr>
//                                 </tbody>
//                               </table>
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//               <table cellspacing="0" cellpadding="0" align="center" class="es-content">
//                 <tbody>
//                   <tr>
//                     <td bgcolor="transparent" align="center" class="esd-stripe">
//                       <table cellpadding="0" cellspacing="0" bgcolor="transparent" align="center" width="600" class="es-content-body" style="background-color: transparent">
//                         <tbody>
//                           <tr>
//                             <td align="left" class="esd-structure es-p35 es-m-p20">
//                               <table width="100%" cellpadding="0" cellspacing="0">
//                                 <tbody>
//                                   <tr>
//                                     <td align="left" width="530" class="esd-container-frame">
//                                       <table cellspacing="0" role="presentation" width="100%" cellpadding="0">
//                                         <tbody>
//                                           <tr>
//                                             <td align="center" class="esd-block-image es-infoblock made_with" style="font-size: 0">
//                                               <a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=1771330&utm_content=password_reset">
//                                                 <img src="https://oioftq.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" width="125" alt="" style="display: block">
//                                               </a>
//                                             </td>
//                                           </tr>
//                                         </tbody>
//                                       </table>
//                                     </td>
//                                   </tr>
//                                 </tbody>
//                               </table>
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   </body>
// </html>`;

// export const PASSWORD_RESET_TEMPLATE = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <title>Password Reset</title>
// </head>

// <body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">

//   <table width="100%" cellspacing="0" cellpadding="0" style="padding:40px 15px;">
//     <tr>
//       <td align="center">

//         <table width="600" cellspacing="0" cellpadding="0"
//           style="background:#ffffff;border-radius:20px;padding:40px;">

//           <!-- Logo -->
//           <tr>
//             <td align="center" style="padding-bottom:30px;">
//               <img src="https://yourlogo.com/logo.png"
//                    alt="Logo"
//                    width="120"/>
//             </td>
//           </tr>

//           <!-- Image -->
//           <tr>
//             <td align="center">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png"
//                 width="140"
//                 alt="Reset Password"
//               />
//             </td>
//           </tr>

//           <!-- Heading -->
//           <tr>
//             <td align="center" style="padding-top:25px;">
//               <h1 style="margin:0;color:#111827;font-size:32px;">
//                 Reset Your Password
//               </h1>
//             </td>
//           </tr>

//           <!-- Text -->
//           <tr>
//             <td align="center" style="padding-top:15px;">
//               <p style="font-size:16px;color:#6b7280;line-height:26px;">
//                 We received a request to reset your password.
//                 Click the button below to create a new password.
//               </p>
//             </td>
//           </tr>

//           <!-- Steps Box -->
//           <tr>
//             <td style="padding-top:30px;">

//               <table width="100%"
//                 style="border:1px solid #e5e7eb;
//                 border-radius:16px;
//                 padding:30px;">

//                 <tr>
//                   <td style="padding-bottom:18px;font-size:18px;color:#111827;">
//                      Enter a new password
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="padding-bottom:18px;font-size:18px;color:#111827;">
//                      Confirm your password
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="font-size:18px;color:#111827;">
//                      Submit changes securely
//                   </td>
//                 </tr>

//               </table>

//             </td>
//           </tr>

//           <!-- Button -->
//           <tr>
//             <td align="center" style="padding-top:35px;">

//               <a href="{{resetLink}}"
//                 style="
//                   background:linear-gradient(90deg,#4f46e5,#7c3aed);
//                   color:#ffffff;
//                   text-decoration:none;
//                   padding:16px 38px;
//                   border-radius:50px;
//                   display:inline-block;
//                   font-size:18px;
//                   font-weight:bold;
//                 ">
//                 Reset Password
//               </a>

//             </td>
//           </tr>

//           <!-- Expiry -->
//           <tr>
//             <td align="center" style="padding-top:35px;">
//               <p style="font-size:14px;color:#6b7280;">
//                 This link is valid for one use only and expires in 2 hours.
//               </p>
//             </td>
//           </tr>

//           <!-- Footer -->
//           <tr>
//             <td align="center" style="padding-top:20px;">
//               <p style="font-size:14px;color:#9ca3af;line-height:24px;">
//                 If you didn’t request a password reset,
//                 you can safely ignore this email.
//               </p>
//             </td>
//           </tr>

//         </table>

//       </td>
//     </tr>
//   </table>

// </body>
// </html>`
