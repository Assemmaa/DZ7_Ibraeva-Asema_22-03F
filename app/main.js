const url = 'https://jsonplaceholder.typicode.com/posts'


 const wrapper = document.querySelector('.wrapper')


const news = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.slice(0, 30).forEach(item => {
            const block = document.createElement('div')
            block.setAttribute('class', 'block')
            block.innerHTML = `
            <img src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171115183/89327941-newspaper-icon-isolated-on-premium-pink-round-button-abstract-illustration.jpg" alt="#">
            <h3>${item.title}</h3>
            <p>&{item.body}</p>
        `
            wrapper.append(block)
        })
    } catch {
        console.log("WRONG")
    }
}

news(url)