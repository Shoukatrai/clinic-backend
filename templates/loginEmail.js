export const loginEmail = (name, email, password) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome to Clinic App</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f4f4;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:20px auto; background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
    
    <!-- Header -->
    <tr>
      <td style="background-color:#1976d2; padding:20px; text-align:center;">
        <h1 style="color:#fff; margin:0; font-size:24px;">Clinic App</h1>
      </td>
    </tr>
    
    <!-- Greeting -->
    <tr>
      <td style="padding:20px;">
        <p style="font-size:16px; color:#333;">Dear Dr. <strong>${name}</strong>,</p>
        <p style="font-size:16px; color:#333;">
          Welcome to our Clinic App! Your account has been created successfully. Please use the credentials below to login and manage your appointments.
        </p>
      </td>
    </tr>

    <!-- Credentials -->
    <tr>
      <td style="padding:20px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #ddd; border-radius:4px;">
          <tr>
            <td style="padding:10px; font-weight:bold; background-color:#f9f9f9;">Email:</td>
            <td style="padding:10px;">${email}</td>
          </tr>
          <tr>
            <td style="padding:10px; font-weight:bold; background-color:#f9f9f9;">Password:</td>
            <td style="padding:10px;">${password}</td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Login Button -->
    <tr>
      <td style="padding:20px; text-align:center;">
        <a href="{{loginUrl}}" style="background-color:#1976d2; color:#fff; text-decoration:none; padding:12px 25px; border-radius:4px; font-weight:bold; display:inline-block;">
          Login to App
        </a>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding:20px; font-size:12px; color:#777; text-align:center;">
        © 2025 Clinic App. All rights reserved.
      </td>
    </tr>
  </table>
</body>
</html>

    `;
};
