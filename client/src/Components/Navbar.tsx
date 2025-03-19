

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="w-full   flex justify-between items-center   px-5 py-2 ">
      <img src="/tseep_logo.png" alt="logo" className="w-56 " />
      <img src="/profile.png" alt="logo" className=" w-12 h-12  " />
    </div>
  );
}
