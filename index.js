var bodyParser = require("body-parser");
var express = require("express");
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var porta = process.env.PORT || 1201;
app.set("port", porta);
app.use(express.static(__dirname + "/_public")); // diretorio compartilhado entre as paginas do programa
app.set("views", "./_views");
app.set("view engine", "ejs");
var server = app.listen(app.get("port"));

console.log("Online")

app.get("/", function(request, response) {
	//region

    response.render("home/index");

    //endregion
});

app.get("/win1", function(request, response) {
	//region
	response.render("win1/teste");
	//endregion
});

app.get("/testeCacheAjax", function(request, response) {
	//region
    let parametros = [];
    parametros["from"] = "teste";
    response.render("testes/TesteCacheAjax", parametros);
    //endregion
});

app.post("/carregaInfos", function(request, response) {
	//region

	const nome = request.body.nome;

	var html = "<div class='div1'><img src='https://fotos.jornaldocarro.estadao.com.br/uploads/2019/10/02150552/Peugeot-208-2020-1600-01-768x543.jpg' class='img-responsive'></div>"

	html += "<div class='div1'><img src='https://uploads.metropoles.com/wp-content/uploads/2018/10/29061838/Screenshot_1275.jpg' class='img-responsive'></div>"

	html += "<div class='div1'><img src='https://computerworld.com.br/wp-content/uploads/sites/2/2019/01/robo-2.jpg' class='img-responsive'></div>"

	 html += "<div class='div1'><img src='https://aventurasnahistoria.uol.com.br/media/_versions/legacy/2018/06/12/futebol-capas-1100594_widelg.png' class='img-responsive'></div>"

	html += "<div class='div1'><img src='https://www.globalframe.com.br/gf_base/empresas/MIGA/imagens/4865352110763FE0504CF949B440EC3BEA03_ferias.jpg' class='img-responsive'></div>"

	html += "<div class='div1'><img src='https://blog.luz.vc/wp-content/uploads/2014/06/o-que-fazer-nas-f%C3%A9rias-de-ver%C3%A3o-696x522.jpg' class='img-responsive'></div>"



	setTimeout(()=>{
		response.json(html);
	},5000);
	
	//endregion
});

app.get("/testeInputs", function(request, response) {
	//region
	response.render("testes/inputs")
	 //endregion
});

app.get("/testeInputs/:pagina", function(request, response) {
	//region
	response.render("testes/inputs"+request.params.pagina)
	 //endregion
});

app.get("/ui", function(request, response) {
	//region
    
    response.render("testes/ui");
    //endregion
});