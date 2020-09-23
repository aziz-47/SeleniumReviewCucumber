Feature: Google arama
  @techproeducationArama
  Scenario: TC01_kullanici googleda techproeducation aramasi yapar
    Given kullanici google sayfasina gider
    And arama kutusuna techproeducation yazar
    Then arama sonuclari sayfasinin basligini kontrol eder
  @seleniumArama
  Scenario: TC02_kullanici googleda selenium aramasi yapar
    Given kullanici google sayfasina gider
    And arama kutusuna selenium yazar
    Then arama sonuclari sayfasinin sonuc sayisini kontrol eder