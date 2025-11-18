export const generateDoctorPassword = (name, email) => {
  const initials = name
    .split(" ")
    .map((n) => n.charAt(0).toUpperCase())
    .join("");

  const emailPart = email.split("@")[0].substring(0, 3);

  const randomNum = Math.floor(1000 + Math.random() * 9000);

  const password = `${initials}${emailPart}${randomNum}`;

  return password;
};


