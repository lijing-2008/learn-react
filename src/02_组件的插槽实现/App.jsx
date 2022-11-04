import NavBar from "./nav-bar";

export default function App() {
    const leftSlot = (
        <button >button</button>
    )
    const centerSlot = <h2>hello world</h2>
    const rightSlot = <i>italic</i>

    return (
        <div>
            <NavBar left={leftSlot} center={centerSlot} right={rightSlot} />
        </div>
    )
}
