$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/googlearama.feature");
formatter.feature({
  "name": "Google arama",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC01_kullanici googleda techproeducation aramasi yapar",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "kullanici google sayfasina gider",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "arama kutusuna techproeducation yazar",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "arama sonuclari sayfasinin basligini kontrol eder",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});