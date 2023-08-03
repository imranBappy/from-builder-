import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className=" max-w-7xl mx-auto">
                <div className=" h-20 flex items-center justify-between">
                    <div>
                        <Link to="/"> <h1 className=" text-2xl font-bold">
                            <img className=" w-14 h-14 rounded-full" src="https://picsum.photos/100/100" alt="logo" /></h1></Link>
                    </div>
                    <div>
                        <ul className=" flex gap-5">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li><Link to="/test">Test</Link></li>
                            <li><Link to="/preview">Preview</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;