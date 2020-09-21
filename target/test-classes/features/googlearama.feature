Feature: Google arama
  Scenario: TC01_kullanici googleda techproeducation aramasi yapar
    Given kullanici google sayfasina gider
    And arama kutusuna techproeducation yazar
    Then arama sonuclari sayfasinin basligini kontrol eder