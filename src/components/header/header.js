import SearchHeader from "./search";

function Header() {
    return (
        <div className="Header" style={{ display: "flex" }}>
            <div style={{backgroundColor: "#666666"}}>
                Hotline đặt hàng
            </div>
            <div>
                Tra cứu đơn hàng
            </div>
            <div>
                Hệ thống Showroom
            </div>
            <SearchHeader></SearchHeader>
        </div>
    )
}

export default Header;