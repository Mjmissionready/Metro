import React from "react";
import "./vProperty.css";

export default function FeaturedProperty() {
    return (
        <div className="fp">
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">2 Storey House</span>
                <span className="fpCity">Halfmoon Bay</span>
                <span className="fpPrice">Near Nego</span>
                <div className="fpRating">
                    <button>5.2k</button>
                    <span>East Auckland</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Apartment</span>
                <span className="fpCity">Auckland CBD</span>
                <span className="fpPrice">Auction</span>
                <div className="fpRating">
                    <button>5k</button>
                    <span>Auckland CBD</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Townhouse</span>
                <span className="fpCity">Papakura</span>
                <span className="fpPrice">$ 1.2 m</span>
                <div className="fpRating">
                    <button>4.7k</button>
                    <span>South Auckland</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">House</span>
                <span className="fpCity">Howick</span>
                <span className="fpPrice">Starting from $105</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>East Auckland</span>
                </div>
            </div>
        </div>
    );
};
