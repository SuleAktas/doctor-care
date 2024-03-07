import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      achievement1: "Tedavi Edilen Hastalar",
      achievement2: "Uzmanlar mevcut",
      achievement3: "Piyasadaki yıllar",
      solutionMiniTitle: "HİZMETLER",
      solutonMainTitle: "Daha iyi hissetmene nasıl yardımcı olabiliriz?",
      solution1Title: "Sindirim sorunları",
      solution1Exp:
        "Amet minim mollit non ıssız ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      solution2Title: "Hormonal Sağlık",
      solution2Exp:
        "Amet minim mollit non ıssız ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      solution3Title: "Zihinsel sağlık",
      solution3Exp:
        "Amet minim mollit non ıssız ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      solution4Title: "Pediatrik Bakım",
      solution4Exp:
        "Amet minim mollit non ıssız ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      solution5Title: "Otoimmün ve İnflamasyon",
      solution5Exp:
        "Amet minim mollit non ıssız ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      solution6Title: "Kalp Sağlığı",
      solution6Exp:
        "Amet minim mollit non ıssız ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      headerLink1: "Ana Sayfa",
      headerLink2: "Hakkında",
      headerLink3: "Hizmetler",
      headerLink4: "Görüşler",
      headerButton: "PLANLAYALIM",
      infoMiniTitle: "DOCTORCARE HOŞGELDİNİZ 👋",
      infoTitle: "Herkes için basitleştirilmiş sağlık hizmeti",
      infoExp:
        "DoctorCare doktorları, hastalığınızın temel nedenini tedavi etmek ve uzun vadeli bir tedavi sağlamak için semptomların ötesine geçer.",
      aboutMiniTitle: "HAKKIMIZDA",
      aboutTitle: "Kim olduğumuzu ve neden var olduğumuzu anlayın",
      aboutExp:
        "Amet minim mollit non ıssız ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit nondeserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non ıssız ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non ıssız ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim. Amet minim mollit non ıssız ullamco est sit aliqua dolor do amet sint.",
      contactTitle: "Bize ulaşın!",
      footerTitle: "Tüm hakları saklıdır",
    },
  },
  sp: {
    translation: {
      achievement1: "Pacientes atendidos",
      achievement2: "Especialistas disponíveis",
      achievement3: "Anos no mercado",
      solutionMiniTitle: "SERVIÇOS",
      solutonMainTitle: "Como podemos ajudá-lo a se sentir melhor?",
      solution1Title: "Problemas digestivos",
      solution1Exp:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      solution2Title: "Saúde Hormonal",
      solution2Exp:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      solution3Title: "Bem-estar mental",
      solution3Exp:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      solution4Title: "Cuidados Pediátricos",
      solution4Exp:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      solution5Title: "Autoimune e Inflamação",
      solution5Exp:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      solution6Title: "Saúde do Coração",
      solution6Exp:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      headerLink1: "Início",
      headerLink2: "Sobre",
      headerLink3: "Serviços",
      headerLink4: "Depoimentos",
      headerButton: "AGENDE SUA CONSULTA",
      infoMiniTitle: "BOAS-VINDAS A DOCTORCARE 👋",
      infoTitle: "Assistência médica simplificada para todos",
      infoExp:
        "Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.",
      aboutMiniTitle: "SOBRE NÓS",
      aboutTitle: "Entenda quem somos e por que existimos",
      aboutExp:
        " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit nondeserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      contactTitle: "Entre em contato com a gente!",
      footerTitle: "Todos os direitos reservados.",
    },
  },
};
i18n.use(initReactI18next).init({
  lng: "tr",
  resources,
});
