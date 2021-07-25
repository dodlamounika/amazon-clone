import Image from "next/image"
import {MenuIcon,SearchIcon,ShoppingCartIcon} from "@heroicons/react/outline"
import {signIn,signOut,useSession} from "next-auth/client"
//import { auth, provider } from '../../firebase'
import {useRouter} from "next/router"
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
function Header() {
const [session] = useSession();
const router = useRouter();
const items = useSelector(selectItems)
//console.log(session,"session")
// const signIn = () =>{
//     auth.signInWithPopup(provider)
//     .then(({user})=>{
//         console.log(user,"user")
//        // console.log(token,"token")
//         // dispatch(login({
//         //     displayName:user.displayName,
//         //     email:user.email,
//         //     photoUrl:user.photoURL
//         // }))
//         // auth()?.currentUser?.getIdToken().then(function(token){
//         //     console.log(token,"token");
//         //   })
//     })
//     .catch(error=>alert(error.message))
// };
// const signOut = () =>{
//     auth.signOut().then(()=>{
        
//     });
// };
    return (
        <header>
            {/* top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                    onClick={()=>router.push('/')}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                {/* search */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text"/>
                    <SearchIcon className="h-12 p-4"/>
                </div>
                {/* right side */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="cursor-pointer link" onClick={!session ? signIn : signOut}>
                    {/* <div className="cursor-pointer link" onClick={signIn}> */}
                        <p>
                            {session ? `Hello, ${session.user.name}`: 'Sign In'}
                        </p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div className="cursor-pointer link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div  onClick={()=>router.push('/checkout')} className="cursor-pointer link relative flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline mt-2 font-extrabold md:text-sm">Basket</p>
                    </div>
                </div>
            </div>
            {/* bottom nav */}
            <div className="bg-amazon_blue-light flex items-center text-white space-x-3 p-2 pl-6">
                <p className="link flex items-center">
                <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
