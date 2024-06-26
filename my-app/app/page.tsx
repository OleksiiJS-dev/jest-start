import Image from "next/image";

export default function Home() {
  const theme = [{ isLight: "light" }]
  
  return (
    <div className="header">
      <ul>
        <li>RED</li>
      </ul>
      <ul>
        <li>Wallet</li>
        <li>Blog</li>
        <li>Sign In</li>
        <li>Login</li>
      </ul>
    </div>
  );
}
