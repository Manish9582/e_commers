import {
  IoLocationOutline,
  IoPersonOutline,
  LuLogOut,
  GoSearch,
  IoIosArrowDown,
  HiOutlineHeart,
  LuBaggageClaim,
} from "@/constants/icons";

const Navbar = () => {
  return (
    <header className="sticky z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 px-8 mx-auto px-gutter grid grid-cols-12 items-center">
        <div className="flex items-center gap-5 col-start-1 col-end-4">
          <a
            className="flex items-center gap-space-sm"
            data-path="home"
            href="#"
          >
            <img
              alt="FreshMart Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnOxcjQSM_s_wRNCXV5LPyozj5mWD8gineKRomApMYTM2rcBkn5fGyUpuyRlinoKgNKcCNc2a60myDKRTMLdd11bNWwC7Xja4y0JK5_vsrVNIeuFois0qT9lt5k87mSrsgv-XtrgX_k2RhNoCsT0bhEpbmOS9e-pR9vwggfZ9lJELUDNe3uchqigRoL71idqw3n4riqHhyH7VK0Zw_PURUZ9JXZDpgZepayyQCNIs"
            />
            <span className="font-headline-md text-on-surface tracking-tight">
              FreshMart
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-sm rounded-xl text-on-surface-variant">
            <IoLocationOutline className="text-primary text-[20px]" />
            <span className="text-body-sm">
              Deliver to: <strong>New York 10001</strong>
            </span>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="col-start-5 col-end-9">
          <div className="relative flex items-center">
            <span className="absolute left-4 text-outline">
              <GoSearch />
            </span>
            <input
              className="w-full outline-none bg-surface-container-low py-space-sm pl-12 pr-space-md rounded-xl text-body-sm text-on-surface placeholder:text-outline border p-1 transition-all"
              placeholder="Search for fresh vegetables, fruits & more..."
              type="text"
            />
          </div>
        </div>
        <div className="col-start-10 col-end-13 flex items-center justify-between">
          <nav
            className="flex gap-5"
            data-active-classes="bg-primary-container text-on-primary-container font-bold"
          >
            <a
              aria-current="page"
              className="px-space-md py-space-sm rounded-xl transition-colors bg-primary-container text-on-primary-container font-bold"
              data-path="home"
              href="#"
            >
              Home
            </a>
            <a
              className="px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors text-label-md"
              data-path="shop"
              href="#"
            >
              Shop
            </a>
            <a
              className="px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors text-label-md"
              data-path="deals"
              href="#"
            >
              Deals
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              className="relative p-space-sm rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
              data-path="wishlist"
              href="#"
              title="Wishlist"
            >
              <HiOutlineHeart className="text-xl" />
              <span className="absolute top-[-13px] left-[13px] bg-tertiary text-on-tertiary text-label-sm w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </a>
            <button
              className="relative p-space-sm rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
              title="Cart"
            >
              <LuBaggageClaim className="text-xl" />
              <span className="absolute top-[-10px] left-[16px] bg-primary text-on-primary text-label-sm w-4 h-4 rounded-full flex items-center justify-center">
                5
              </span>
            </button>
            <div className="relative group ml-space-xs">
              <button className="flex items-center gap-space-xs p-1 rounded-full hover:bg-surface-container-high transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">
                  <IoPersonOutline />
                </div>
              </button>
              <div className="absolute right-0 top-full pt-2 w-56 hidden group-hover:block">
                <div className="bg-surface-container-lowest p-3 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-space-sm flex flex-col">
                  <div className="px-space-md py-space-xs border-b border-surface-variant mb-space-xs">
                    <p className="text-label-md text-on-surface">
                      Alex Johnson
                    </p>
                    <p className="text-label-sm text-outline">
                      alex@example.com
                    </p>
                  </div>
                  <a
                    className="px-space-md mt-1 py-space-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors flex items-center gap-space-sm"
                    data-path="my-orders"
                    href="#"
                  >
                    <LuBaggageClaim />
                    My Orders
                  </a>
                  <a
                    className="px-space-md py-space-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors flex items-center gap-space-sm"
                    data-path="addresses"
                    href="#"
                  >
                    <IoLocationOutline />
                    Addresses
                  </a>
                  <div className="border-t border-surface-variant my-space-xs"></div>
                  <a
                    className="px-space-md mt-1 py-space-sm text-body-sm text-error hover:bg-error-container hover:text-on-error-container transition-colors flex items-center gap-space-sm"
                    data-path="logout"
                    href="#"
                  >
                    <LuLogOut />
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
