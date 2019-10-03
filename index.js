var bodyParser = require("body-parser");
var express = require("express");
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var porta = process.env.PORT || 3000;
app.set("port", porta);
app.use(express.static(__dirname + "/_public")); // diretorio compartilhado entre as paginas do programa
app.set("views", "./_views");
app.set("view engine", "ejs");
var server = app.listen(app.get("port"));

console.log("Online")

app.get("/testeCacheAjax", function(request, response) {
    let parametros = [];
    parametros["from"] = "teste";
    response.render("home/TesteCacheAjax", parametros);
});

app.post("/carregaInfos", function(request, response) {

	const nome = request.body.nome;

	var html = "<div class='div1'><img src='https://www.globalframe.com.br/gf_base/empresas/MIGA/imagens/4865352110763FE0504CF949B440EC3BEA03_ferias.jpg' class='img-responsive'></div>"

	html += "<div class='div1'><img src='https://blog.luz.vc/wp-content/uploads/2014/06/o-que-fazer-nas-f%C3%A9rias-de-ver%C3%A3o-696x522.jpg' class='img-responsive'></div>"



	setTimeout(()=>{
		response.json(html);
	},5000);
	

});