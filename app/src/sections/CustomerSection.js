import ReactImageAppear from "react-image-appear";
import Marquee from "react-fast-marquee";
import { customer } from "../data/customer";

const CustomerSection = () => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(customer);

    return (
        <section className="customer-section">
            <div className="">
                <div className="section-wrapper">
                    <Marquee
                        speed={80}
                        gradient={false}
                        className="card-wrapper customer"
                    >
                        {customer.length && customer.map(item => (
                            <div key={item.id} className="card customer">
                                <div className={`image-wrapper ${item.width ? "different-width" : ""}`}>
                                    <ReactImageAppear
                                        src={item.image}
                                        className="card-img"
                                        placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                                        showLoader={false}
                                        alt={item.title}
                                    />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}

export default CustomerSection;
