export default function AccountHeader({ data }) {
  return (
    <>
      <h2 className="text-xl">{data.heading}</h2>
      <p className="text-neutral-500 text-sm">{data.desc}</p>
    </>
  );
}
