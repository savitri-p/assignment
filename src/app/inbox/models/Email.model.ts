export class Email {
  email_id: number;
  from: {
    name: string,
    email: string,
    avatar: string
  };
  subject: string;
  body: string;
  mailingdate: string;
  attachment: string;
  flag: boolean;  
  read_status: boolean;  
  pin: boolean;
}
