const puppeteer = require('puppeteer');
//http://devexpress.github.io/testcafe/example
(async () => {    
    //MONTAR BROWSER
    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        headless: false,
        slowMo: 10,
        defaultViewport: {
            width: 1200,
            height: 1024
        },
        ignoreDefaultArgs: false
    });
    // ABRIR NOVA ABA
    const page = await browser.newPage();
    //TEMPO PADRÃO DE NAVEGAÇÃO
    await page.setDefaultNavigationTimeout(60000)
    await page.setDefaultTimeout(50000)
    await page.setViewport({width: 1200, height: 1024})
    
    // NAVEGA ATE A PAGINA
    await page.goto('http://devexpress.github.io/testcafe/example', {waitUntil: 'networkidle0'});

    await page.waitForSelector('#developer-name')

    const page_title = await page.title();
    console.log(page_title);

    const page_url = await page.url();
    console.log(page_url)

    // ESCREVER EM INPUTS
    await page.type('#developer-name', 'TESTE12345', {delay: 100})

    //FECHAR ALERT
    page.on('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.dismiss()
    })


    //CLICAR BTN
    await page.click('#populate')

    //CLICAR CHECKBOX
    await page.click('#remote-testing')


    // ESCOLHER SELECT
    await page.select('#preferred-interface', 'Both')

    // OBTENDO TODOS OS CHECKBOX
    const check = await page.$$('input[type="checkbox"]')
    console.log(check.length);

    // OBTENDO O CONTEUDO DE TODOS OS LABEL
    const labelContent = await page.$$eval('label', elements => elements.map(el => el.textContent))
    console.log(labelContent)


    await page.click('#tried-test-cafe');

    await page.type('#comments', 'EU SOU UM COMENTARIO')

    await page.click('#submit-button')

    await page.waitForSelector('.result-content')

    //GERAR PDF
    // await page.pdf({
    //     path: './exemplo.pdf'
    // })

    await browser.close();

})();