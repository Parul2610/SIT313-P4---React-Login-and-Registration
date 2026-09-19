function Subscribe() {
    return (
        <div className="subscribe" id="contact">

            <h2>SIGN UP FOR OUR DAILY INSIDER</h2>

            <form action="/subscribe" method="POST">

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />

                <button type="submit">
                    Subscribe
                </button>

            </form>

        </div>
    );
}

export default Subscribe;