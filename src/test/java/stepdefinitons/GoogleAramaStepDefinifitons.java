package stepdefinitons;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
public class GoogleAramaStepDefinifitons {
    @Given("kullanici google sayfasina gider")
    public void kullanici_google_sayfasina_gider() {
        System.out.println("Kullanıcı Google'a gitti.");
    }
    @Given("arama kutusuna techproeducation yazar")
    public void arama_kutusuna_techproeducation_yazar() {
        System.out.println("Kullanıcı techproeducation yazdı.");
    }
    @Then("arama sonuclari sayfasinin basligini kontrol eder")
    public void arama_sonuclari_sayfasinin_basligini_kontrol_eder() {
        System.out.println("Kullanıcı swayfa başlığını test etti.");
    }
}