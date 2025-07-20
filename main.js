const data = {
    headlinerPrimary : "Reliable, efficient delivery",
    headlinerSecondary : "Powered by Technology",
    introText : `Our Artificial Intelligence powered tools use millions of project data points 
    to ensure that your project is successful`,
    cards : {
        supervisor : 
            {title : "Supervisor",
            description : "Monitors activity to identify project roadblocks",
            img : "./images/icon-supervisor.svg"},


        teamBuilder : 
            {title : "Team Builder",
            description : "Scans our talent network to create the optimal team for your project",
            img : "./images/icon-team-builder.svg"},

        karma : 
            {title : "Karma",
            description : "Regularly evaluates our talent to ensure quality",
            img : "./images/icon-karma.svg"},

        calculator : 
            {title : "Calculator",
            description : "Uses data from past projects to provide better delivery estimates",
            img : "./images/icon-calculator.svg"},
      }
}

const app = document.createElement("main")

app.innerHTML = `
    <article class="container">
        <section class="hero">
            <h1 class="hero__primary text-extralight-xl">${data.headlinerPrimary}</h1>
            <h2 class="hero__secondary text-semibold-xl">${data.headlinerSecondary}</h2>
            <p class="hero__intro text-regular-s">${data.introText}</p>
        </section>
        <section class="card-grid">
            <div class="card card--cyan">
                <h3 class="text-semibold-m">${data.cards.supervisor.title}</h3>
                <span class="text-regular-xs">${data.cards.supervisor.description}</span>
                <figure><img src="${data.cards.supervisor.img}" alt="${data.cards.supervisor.title}"/></figure>
            </div>
            <div class="card-grid__central"> 
                <div class="card card--red">
                    <h3 class="text-semibold-m">${data.cards.teamBuilder.title}</h3>
                    <span class="text-regular-xs">${data.cards.teamBuilder.description}</span>
                    <figure><img src="${data.cards.teamBuilder.img}" alt="${data.cards.teamBuilder.title}"/></figure>
                    </div>
                <div class="card  card--orange">
                    <h3 class="text-semibold-m">${data.cards.karma.title}</h3>
                    <span class="text-regular-xs">${data.cards.karma.description}</span>
                    <figure><img src="${data.cards.karma.img}" alt="${data.cards.karma.title}"/></figure>
                </div>
            </div>
            <div class="card card--blue">
                <h3 class="text-semibold-m">${data.cards.calculator.title}</h3>
                <span class="text-regular-xs">${data.cards.calculator.description}</span>
                <figure><img src="${data.cards.calculator.img}" alt="${data.cards.calculator.title}"/></figure>
            </div>
        
        </section>
    
    </article>
`

document.body.appendChild(app)