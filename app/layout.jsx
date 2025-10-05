import "./assets/css/globals.css";

export const metadata = {
  title: "Talka",
  description: "เว็บรวมแชทที่ให้คุณจัดการทุกการสนทนาในที่เดียว รองรับหลายแพลตฟอร์ม Messenger, LINE, WhatsApp และอื่นๆ ใช้งานง่าย ปลอดภัย และไม่พลาดทุกข้อความสำคัญ เหมาะกับทั้งผู้ใช้งานทั่วไปและธุรกิจที่ต้องการรวมทุกช่องทางสื่อสารออนไลน์ในที่เดียว",
  keywords : "Talka , เเชทรวม , โปรเเกรมเเชท , onechat",
  icons : {
    icon : "/TALKA-Favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
