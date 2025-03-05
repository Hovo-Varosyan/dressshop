import Image from 'next/image'
import AddCardIcon from "@mui/icons-material/AddCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import StoreIcon from "@mui/icons-material/Store";

export default function UserAnalitics() {
    return (
        <section className="user-state">
            <div className="data flex w-full">
                <div className="flex-grow flex gap-3 flex-wrap">
                    <div>
                        <LocalShippingIcon /> 7
                    </div>
                    <div>
                        <ShoppingCartIcon />8
                    </div>
                    <div>
                        <BookmarksIcon />9
                    </div>
                    <div>
                        <StoreIcon />
                        65
                    </div>
                </div>
                <div >
                    <AddCardIcon />
                    15.58֏
                </div>
            </div>
        </section>
    )
}
