<script>
    import { page } from "$app/state";
    const hash = $derived(page.url.hash) ;
</script>
<p>{hash}</p>
<div class="cs-tabs">
    <input
        class="radiotab"
        name="tabs"
        tabindex="0"
        type="radio"
        id="about-section"
        onclick={() => (window.location.hash = "#about")}
        checked={hash == "#about" || !hash }
    />
    <label class="label" for="about-section">About</label>
    <div class="panel" tabindex="-1">
        <img
            src="https://avatars.githubusercontent.com/u/49343517?v=4&size=256"
            alt="My avatar"
        />
        <p>Dinh Nguyen Minh Hai</p>
        <p>Backend Developer</p>
        <p>2003</p>
        <p>dinhnguyenminhhai@gmail.com</p>
        <a
            class="cs-btn"
            href="https://facebook.com/real.haidinh"
            target="_blank">Facebook</a
        >

        <a class="cs-btn" href="https://github.com/realhaidinh" target="_blank"
            >Github</a
        >
        <a
            class="cs-btn"
            href="https://www.linkedin.com/in/hai-dinh-856919154/"
            target="_blank">LinkedIn</a
        >

        <div class="education-block">
            <p>Education</p>
            <p>University of Information Technology VNU HCM</p>
            <p>2021 - Currently attending</p>
        </div>
    </div>
    <input
        class="radiotab"
        tabindex="0"
        name="tabs"
        type="radio"
        id="projects-section"
        onclick={() => (window.location.hash = "#projects")}
        checked={hash == "#projects"}
    />
    <label class="label" for="projects-section">Projects</label>
    <div class="panel" tabindex="-1">
        <h2>My projects</h2>
    </div>
</div>
