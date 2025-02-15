<script>
    import "normalize.css";
    import "../style.css";
	import Footer from "../lib/Footer.svelte";
    import Navbar from "../lib/Navbar.svelte";
</script>

<Navbar />
<slot />
<Footer />