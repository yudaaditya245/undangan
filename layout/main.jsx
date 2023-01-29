import Link from "next/link";
import { CgArrowLongLeft } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { BsFilePersonFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function MainLayout({ children }) {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-row">
                <div className="p-5 flex flex-col bg-dark-2 min-h-screen">
                    <div className="mb-5 flex items-center">
                        <Link href="/" className="mr-3">
                            <CgArrowLongLeft size={20} />
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <Link href="/dashboard" className="flex items-center mb-5">
                            <AiFillHome size={17} className="mr-2"/> <span>Dashboard</span>
                        </Link>
                        <Link href="/dashboard/tamu" className="flex items-center mb-5">
                            <BsFilePersonFill size={17} className="mr-2"/> <span>Tamu</span>
                        </Link>
                        <Link href="/dashboard/amplop" className="flex items-center mb-5">
                            <RiMoneyDollarCircleFill size={17} className="mr-2"/> <span>Amplop</span>
                        </Link>
                    </div>
                </div>
                <div className="p-5 w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
