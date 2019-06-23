let readline = require('readline-sync');
let code = Math.floor((Math.random() * 999999) + 100000);
let codeString = code.toString();
let playerHealth = 15;
let playerDamage1 = 5;
let playerDamage2 = 10;
let vascso = true;
let guard1Health = 30;
let guard1Damage = 10;
let guard1Live = true;
let guard1Hide = false;
let guard2Health = 30;
let guard2Damage = 10;
let kulcs = true;
let artifacts = ['Semmilyen tárgy nincs nálad'];
let water = 2;
let paper1 = true;
let paper2 = true;
let steroid = true;
let quit = 'k: Kilépés a programból.';
let undif = 'Érvénytelen karakter!';
let udvarStr = 'A földön látsz egy kis tégelyt, amiben egy steroid pirula található. Ezen kívül a túl oldalon van egy fa, ami alatt egy pad látható, illetve két kijárati ajtó: az egyik kulccsal nyílik, a másiknál úgy tűnik, hogy számkód szükséges a nyitáshoz.';
let udvaron = true;
let codeDoorArr = true;
let codeChanches = 3;

const first = () => {
  console.clear();
  let time1 = 1000;
  const timer1 = () => {
    if (time1 > 0) {
      time1 -= 600;
      setTimeout(timer1, time1);
    } else {
      title();
    }
  };
  timer1();
};

const title = () => {
  console.log('                              Fogvatartva');
  let time2 = 1000;
  const timer2 = () => {
    if (time2 > 0) {
      time2 -= 300;
      setTimeout(timer2, time2);
    } else {
      welcome();
    }
  };
  timer2();
};

const welcome = () => {
  console.log('');
  console.log('Üdvözöllek! Tegyél egy próbát, és szabadulj ki, ha tudsz!');
  console.log('');
  console.log('Válassz az alábbi lehetőségek közül:');
  console.log('');
  console.log('j: Játék indítása.');
  console.log('');
  console.log(quit);
  let choose = readline.question('');
  switch (choose) {
    case 'j':
      console.clear();
      console.log('Egy elmegyógyintézet zárkájában találod magadat az ágyon és nem emlékszel, hogy kerültél ide. A szemközti falon egy ablakot és egy vízcsapot látsz, mellette egy vasajtó található, ami zárva van. Mellékhelyiség is tartozik a cellához, amit egy ajtó választ el.');
      let time3 = 1000;
      const timer3 = () => {
        if (time3 > 0) {
          time3 -= 200;
          setTimeout(timer3, time3);
        } else {
          zarka();
        }
      };
      timer3();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      welcome();
  }
};

const zarka = () => {
  console.log('A zárkában az alábbi lehetőségek közül választhatsz:');
  console.log('');
  console.log('1. Kinézel az ablakon.');
  console.log('2. Iszol egy kis vizet a csapból.');
  console.log('3. Benézel az ágy alá.');
  console.log('4. Vársz egy kicsit.');
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad.');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      console.clear();
      console.log('Szépen süt a nap, ezen kívül nincs semmi érdekes.');
      console.log('');
      let time4 = 1000;
      const timer4 = () => {
        if (time4 > 0) {
          time4 -= 300;
          setTimeout(timer4, time4);
        } else {
          zarka();
        }
      };
      timer4();
      break;
    case '2':
      if (water > 0) {
        playerHealth = playerHealth + 5;
        console.clear();
        console.log('Az életpontjaid 5-tel növekedtek!');
        console.log('');
        console.log('');
        water = water - 1;
        zarka();
        break;
      }
      if (water === 0) {
        console.clear();
        console.log('Már nem fér beléd több folyadék!');
        console.log('');
        zarka();
        break;
      }
      break;
    case '3':
      if (paper1 === true) {
        console.clear();
        console.log('Ott hever egy félbe tépett papír cetli, mely a következőt tartalmazza: "code:', codeString.charAt(0), codeString.charAt(1), codeString.charAt(2), '"');
        console.log('');
        cetli1();
        break;
      }
      if (paper1 === false) {
        console.clear();
        console.log('Nincs ott semmi, a cetlit már felvetted.');
        console.log('');
        zarka();
        break;
      }
      break;
    case '4':
      console.clear();
      console.log('Kulcscsörgésre leszel figyelmes, valaki kizárja az ajtót és benyit: egy gumibottal felfegyverkezett őr toppan be a celládba és a karodnál fogva az ajtó felé terel. Eközben így szól: "Itt a séta ideje!" A folyosóra kiérve megpillantod az udvarra vezető ajtót. Eközben az őr hátat fordít neked egy kis időre, amíg becsukja a zárkád ajtaját. Hirtelen meglátsz egy kisebb vasrudat, ami a szemközti falnak van támasztva. A vasrúd éppen hogy elférne a köppenyed belső zsebébe.');
      guard();
      break;
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      zarka();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      zarka();
  }
};

const zarka2 = () => { // Zárka2
  console.log('A zárkában az alábbi lehetőségek közül választhatsz:');
  console.log('');
  console.log('1. Kinézel az ablakon');
  console.log('2. Iszol egy kis vizet a csapból');
  console.log('3. Benézel az ágy alá');
  console.log('4. Kimész a folyosóra');
  if (guard1Hide === true && kulcs === true) {
    console.log('5. Elteszed az őr kulcscsomóját.');
  }
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      console.clear();
      console.log('Szépen süt a nap, ezen kívül nincs semmi érdekes.');
      console.log('');
      console.log('');
      zarka2();
      break;
    case '2':
      if (water > 0) {
        playerHealth = playerHealth + 5;
        console.clear();
        console.log('Az életpontjaid 5-tel növekedtek!');
        console.log('');
        console.log('');
        water = water - 1;
        zarka2();
        break;
      }
      if (water === 0) {
        console.clear();
        console.log('Már nem fér beléd több folyadék!');
        console.log('');
        zarka2();
        break;
      }
      break;
    case '3':
      if (paper1 === true) {
        console.clear();
        console.log('Ott hever egy félbe tépett papír cetli, mely a következőt tartalmazza: "code:', codeString.charAt(0), codeString.charAt(1), codeString.charAt(2), '"');
        console.log('');
        cetli2();
        break;
      }
      if (paper1 === false) {
        console.clear();
        console.log('Nincs ott semmi, a cetlit már felvetted.');
        console.log('');
        zarka2();
        break;
      }
      break;
    case '4':
      if (guard1Live === false && guard1Hide === false) {
        console.clear();
        console.log('Az őrök megtalálták a holttestet és amikor kiléptél a folyosóra, rögtön meglincseltek! A rajtad lévő vérfoltokból ítélve megállapították, hogy Te ölted meg az őrt, ezért halálra vertek! Vége a játéknak!!');
        process.exit();
      } else {
        console.clear();
        folyoso();
        break;
      }
    case '5':
      if (guard1Hide === true && kulcs === true) {
        kulcs = false;
        console.clear();
        console.log('eltetted a kulcscsomót');
        if (artifacts[0] === 'Semmilyen tárgy nincs nálad') {
          artifacts.shift();
          artifacts[0] = '|kulcscsomó| ';
          break;
        } else {
          artifacts.push('|kulcscsomó| ');
        }
        zarka2();
      } else {
        console.clear();
        console.log(undif);
        console.log('');
        zarka2();
      }
      break;
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      zarka2();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      zarka2();
  }
};

const cetli1 = () => { // cetli1
  console.log('Az alábbi lehetőségek közül választhatsz:');
  console.log('1. Elteszed a cetlit.');
  console.log('2. Nem teszed el a cetlit.');
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      paper1 = false;
      if (artifacts[0] === 'Semmilyen tárgy nincs nálad') {
        artifacts.shift();
        artifacts[0] = '|cetli "code:';
        artifacts[1] = codeString.charAt(0);
        artifacts[2] = codeString.charAt(1);
        artifacts[3] = codeString.charAt(2);
        artifacts[4] = '"| ';
      } else {
        artifacts.push('|cetli "code:');
        artifacts.push(codeString.charAt(0));
        artifacts.push(codeString.charAt(1));
        artifacts.push(codeString.charAt(2));
        artifacts.push('"| ');
      }
      console.clear();
      zarka();
      break;
    case '2':
      console.clear();
      zarka();
      break;
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      cetli1();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      cetli1();
  }
};

const cetli2 = () => { // cetli2
  console.log('Az alábbi lehetőségek közül választhatsz:');
  console.log('1. Elteszed a cetlit.');
  console.log('2. Nem teszed el a cetlit.');
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      paper1 = false;
      if (artifacts[0] === 'Semmilyen tárgy nincs nálad') {
        artifacts.shift();
        artifacts[0] = '|cetli "code:';
        artifacts[1] = codeString.charAt(0);
        artifacts[2] = codeString.charAt(1);
        artifacts[3] = codeString.charAt(2);
        artifacts[4] = '"| ';
      } else {
        artifacts.push('|cetli "code:');
        artifacts.push(codeString.charAt(0));
        artifacts.push(codeString.charAt(1));
        artifacts.push(codeString.charAt(2));
        artifacts.push('"| ');
      }
      console.clear();
      zarka2();
      break;
    case '2':
      console.clear();
      zarka2();
      break;
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      cetli2();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      cetli2();
  }
};

const guard = () => { // Guard
  console.log('');
  console.log('A folyosón alábbi lehetőségek közül választhatsz:');
  console.log('');
  console.log('1. Megütöd az őrt.');
  console.log('2. Nem teszel semmit, hagyod, hogy kivigyen az udvarra');
  if (vascso === true) {
    console.log('3. felveszed a vascsövet.');
  }
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  console.log('Az őr életpontjai: ', guard1Health);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      console.clear();
      if (vascso === false) {
        if (guard1Health - playerDamage2 > 0) {
          guard1Health = guard1Health - playerDamage2;
          console.clear();
          console.log('Sebeztél az őrön', playerDamage2, 'egységet, de rögtön visszaütött, így vesztettél', guard1Damage, 'egységnyi életpontot');
        } else {
          guard1Health = 0;
        }
      }
      if (vascso === true) {
        if (guard1Health - playerDamage1 > 0) {
          guard1Health = guard1Health - playerDamage1;
          console.clear();
          console.log('Sebeztél az őrön', playerDamage1, 'egységet, de rögtön visszaütött, így vesztettél', guard1Damage, 'egységnyi életpontot');
        } else {
          guard1Health = 0;
        }
      }
      if (guard1Health > 0) {
        if (playerHealth - guard1Damage > 0) {
          playerHealth = playerHealth - guard1Damage;
        } else {
          playerHealth = 0;
        }
      }
      if (playerHealth === 0) {
        console.log('Ütése halálosnak bizonyult! Meghaltál, vége a játéknak!');
        console.log('');
        console.log('Életpontjaid: ', playerHealth);
        console.log('Az őr életpontjai: ', guard1Health);
        process.exit();
      }
      if (guard1Health === 0) {
        console.log('Megölted az őrt!! Észreveszed, hogy az övén egy kulcscsomó van.');
        guard1Live = false;
        killedGuard();
        break;
      }
      fight1();
      break;
    case '2':
      console.clear();
      console.log('Az udvarra kiérve az őr elenged, így szabadon sétálgathatsz a sok köppenyes bolond között.', udvarStr);
      udvar();
      break;
    case '3':
      if (vascso === true) {
        vascso = false;
        if (artifacts[0] === 'Semmilyen tárgy nincs nálad') {
          artifacts.shift();
          artifacts[0] = '|vascső| ';
        } else {
          artifacts.push('|vascső| ');
        }
      } else {
        console.clear();
        console.log(undif);
        console.log('');
        guard();
      }
      console.clear();
      guard();
      break;
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      guard();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      guard();
  }
};

const fight1 = () => {
  console.log('Az alábbi lehetőségek közül választhatsz: ');
  console.log('1. Ismét megütöd az őrt.');
  console.log('2. Együttműködsz vele és hagyod, hogy kivezessen az udvarra');
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  console.log('Az őr életpontjai: ', guard1Health);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      console.clear();
      if (vascso === false) {
        if (guard1Health - playerDamage2 > 0) {
          guard1Health = guard1Health - playerDamage2;
          console.clear();
          console.log('Sebeztél az őrön', playerDamage2, 'egységet, de rögtön visszaütött, így vesztettél', guard1Damage, 'egységnyi életpontot');
        } else {
          guard1Health = 0;
        }
      }
      if (vascso === true) {
        if (guard1Health - playerDamage1 > 0) {
          guard1Health = guard1Health - playerDamage1;
          console.clear();
          console.log('Sebeztél az őrön', playerDamage1, 'egységet, de rögtön visszaütött, így vesztettél', guard1Damage, 'egységnyi életpontot');
        } else {
          guard1Health = 0;
        }
      }
      if (guard1Health > 0) {
        if (playerHealth - guard1Damage > 0) {
          playerHealth = playerHealth - guard1Damage;
        } else {
          playerHealth = 0;
        }
      }
      if (playerHealth === 0) {
        console.log('Ütése halálosnak bizonyult! Meghaltál, vége a játéknak!');
        console.log('');
        console.log('Életpontjaid: ', playerHealth);
        console.log('Az őr életpontjai: ', guard1Health);
        process.exit();
      }
      if (guard1Health === 0) {
        console.clear();
        console.log('Megölted az őrt!! Észreveszed, hogy az övén egy kulcscsomó van.');
        guard1Live = false;
        killedGuard();
      }
      fight1();
      break;
    case '2':
      console.clear();
      console.log('Az udvarra kiérve az őr elenged, így szabadon sétálgathatsz a sok köppenyes bolond között.', udvarStr);
      udvar();
      break;
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      fight1();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      fight1();
  }
};

const killedGuard = () => {
  console.log('');
  console.log('Az alábbi lehetőségek közül választhatsz:');
  console.log('');
  console.log('1. Visszaméssz a zárkába.');
  console.log('2. Kimész az udvarra');
  console.log('3. Elrejted az őr holttestét a zárka wc-jében.');
  if (kulcs === true) {
    console.log('4. Elteszed az őr kulcscsomóját.');
  }
  if (vascso === true) {
    console.log('5. felveszed a vascsövet.');
  }
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  console.log('Az őr életpontjai: ', guard1Health);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      console.clear();
      zarka2();
      break;
    case '2':
      console.clear();
      console.log('Az udvarra kiérve sok köppenyes bolondot látsz.', udvarStr);
      udvar();
      break;
    case '3':
      guard1Hide = true;
      console.clear();
      console.log('Sikerült elrejtened a holttestet a zárka wc-jében.');
      zarka2();
      break;
    case '4':
      if (kulcs === true) {
        kulcs = false;
        console.clear();
        console.log('Eltetted a kulcscsomót.');
        if (artifacts[0] === 'Semmilyen tárgy nincs nálad') {
          artifacts.shift();
          artifacts[0] = '|kulcscsomó| ';
          break;
        } else {
          artifacts.push('|kulcscsomó| ');
        }
        killedGuard();
        break;
      } else {
        console.clear();
        console.log(undif);
        console.log('');
        killedGuard();
      }
      console.clear();
      killedGuard();
      break;
    case '5':
      if (vascso === true) {
        vascso = false;
        if (artifacts[0] === 'Semmilyen tárgy nincs nálad') {
          artifacts.shift();
          artifacts[0] = '|vascső| ';
        } else {
          artifacts.push('|vascső| ');
        }
        break;
      } else {
        console.clear();
        console.log(undif);
        console.log('');
        killedGuard();
      }
      console.clear();
      killedGuard();
      break;
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      killedGuard();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      killedGuard();
  }
};

const folyoso = () => {
  console.log('Az alábbi lehetőségek közül választhatsz:');
  console.log('');
  console.log('1. Visszamész a zárkába.');
  console.log('2. Kimész az udvarra');
  if (vascso === true) {
    console.log('3. felveszed a vascsövet.');
  }
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      console.clear();
      zarka2();
      break;
    case '2':
      console.clear();
      if (udvaron === true) {
        console.log('Az udvarra kiérve sok köppenyes bolondot látsz.', udvarStr);
      }
      udvaron = false;
      udvar();
      break;
    case '3':
      if (vascso === true) {
        vascso = false;
        if (artifacts[0] === 'Semmilyen tárgy nincs nálad') {
          artifacts.shift();
          artifacts[0] = '|vascső| ';
        } else {
          artifacts.push('|vascső| ');
        }
      } else {
        console.clear();
        console.log(undif);
        console.log('');
        folyoso();
      }
      console.clear();
      folyoso();
      break;
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      folyoso();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      folyoso();
  }
};

const udvar = () => {
  console.log('');
  console.log('Az udvaron alábbi lehetőségek közül választhatsz:');
  console.log('');
  console.log('1. Elmész a padhoz hűssölni egy kicsit.');
  console.log('2. Elmész a kulccsal nyitható kijárati ajtóhoz.');
  console.log('3. Elmész a számkóddal nyitható kijárati ajtóhoz.');
  console.log('4. Visszamész a folyosóra.');
  if (steroid === true) {
    console.log('5. Beveszed a steroid pirulát.');
  }
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      console.clear();
      if (guard1Live === false && guard1Hide === false) {
        console.clear();
        console.log('Az őrök a jelek szerint megtalálták a holttestet, ezért kijöttek az udvarra és mindenkit meglincseltek! A rajtad lévő vérfoltokból ítélve megállapították, hogy Te ölted meg az őrt, ezért halálra vertek! Vége a játéknak!!');
        process.exit();
      } else {
        console.clear();
        pad();
        break;
      }
    case '2':
      console.clear();
      if (guard1Live === false && guard1Hide === false) {
        console.clear();
        console.log('Az őrök a jelek szerint megtalálták a holttestet, ezért kijöttek az udvarra és mindenkit meglincseltek! A rajtad lévő vérfoltokból ítélve megállapították, hogy Te ölted meg az őrt, ezért halálra vertek! Vége a játéknak!!');
        process.exit();
      } else {
        console.clear();
        keyDoor();
        break;
      }
    case '3':
      console.clear();
      if (guard1Live === false && guard1Hide === false) {
        console.clear();
        console.log('Az őrök a jelek szerint megtalálták a holttestet, ezért kijöttek az udvarra és mindenkit meglincseltek! A rajtad lévő vérfoltokból ítélve megállapították, hogy Te ölted meg az őrt, ezért halálra vertek! Vége a játéknak!!');
        process.exit();
      } else {
        console.clear();
        codeDoor();
        break;
      }
    case '4':
      console.clear();
      if (guard1Live === false && guard1Hide === false) {
        console.clear();
        console.log('Az őrök a jelek szerint megtalálták a holttestet, ezért kijöttek az udvarra és mindenkit meglincseltek! A rajtad lévő vérfoltokból ítélve megállapították, hogy Te ölted meg az őrt, ezért halálra vertek! Vége a játéknak!!');
        process.exit();
      } else {
        console.clear();
        folyoso();
        break;
      }
    case '5':
      if (steroid === true) {
        steroid = false;
        playerHealth = playerHealth + 5;
        console.clear();
        console.log('Az életpontjaid 5-tel növekedtek!');
        console.log('');
        console.log('');
        udvar();
        break;
      } else {
        console.clear();
        console.log(undif);
        console.log('');
        udvar();
      }
      break;
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      udvar();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      udvar();
  }
};

const pad = () => {
  if (paper2 === true) {
    console.log('');
    console.log('Az árnyékban, a padon látsz egy félbetépett cetlit, aminek az első fele hiányzik. A cetlin a következő számsor olvasható: ', codeString.charAt(3), codeString.charAt(4), codeString.charAt(5), '"');
  }
  console.log('');
  console.log('Az alábbi lehetőségek közül választhatsz:');
  console.log('');
  console.log('1. felmászol a fára.');
  console.log('2. Visszamész az udvar kiinduló pontjához.');
  if (paper2 === true) {
    console.log('3. Elteszed a cetlit.');
  }
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      if (playerHealth - 5 > 0) {
        playerHealth = playerHealth - 5;
      } else {
        playerHealth = 0;
      }
      if (playerHealth === 0) {
        console.clear();
        console.log('Elfogyott az összes életpontod! Meghaltál, vége a játéknak!');
        console.log('');
        console.log('Életpontjaid: ', playerHealth);
        process.exit();
      }
      console.clear();
      console.log('Leestél a fáról, így 5 életpontot vesztettél.');
      pad();
      break;
    case '2':
      console.clear();
      udvar();
      break;
    case '3':
      if (paper2 === true) {
        paper2 = false;
        if (artifacts[0] === 'Semmilyen tárgy nincs nálad') {
          artifacts.shift();
          artifacts[0] = '|cetli "';
          artifacts[1] = codeString.charAt(3);
          artifacts[2] = codeString.charAt(4);
          artifacts[3] = codeString.charAt(5);
          artifacts[4] = '"| ';
        } else {
          artifacts.push('|cetli "');
          artifacts.push(codeString.charAt(3));
          artifacts.push(codeString.charAt(4));
          artifacts.push(codeString.charAt(5));
          artifacts.push('"| ');
        }
      } else {
        console.clear();
        console.log(undif);
        console.log('');
        pad();
      }
      console.clear();
      console.log('Eltetted a cetlit.');
      pad();
      break;
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      pad();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      pad();
  }
};

const codeDoor = () => {
  if (codeDoorArr === true) {
    console.log('Az ajtóhoz tartozik egy terminál, ahol meg lehet adni a kódot.');
  }
  codeDoorArr = false;
  console.log('Az alábbi lehetőségek közül választhatsz:');
  console.log('');
  console.log('1. Megadod a kódot.');
  console.log('2. Visszamész az udvar kiinduló pontjához.');
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      console.clear();
      codeGiving();
      break;
    case '2':
      console.clear();
      udvar();
      break;
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      codeDoor();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      codeDoor();
  }
};

const codeGiving = () => {
  console.log('Kérlek, add meg a kódot!');
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  let choose = readline.question('');
  switch (choose) {
    case codeString:
      console.clear();
      guard2();
      break;
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      codeGiving();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      codeChanches = codeChanches - 1;
      console.clear();
      console.log('Nem jó kódot adtál meg!!', codeChanches, 'lehetőséged maradt!');
      console.log('');
      if (codeChanches === 0) {
        console.clear();
        console.log('Az őrök riasztást kaptak, hogy valaki 3-szor eltévesztette a kódot. Pillanatok alatt ott teremnek és elkapnak. Egy sötét cellába zárnak, ahonnan soha nem fogsz kijutni! Vége a játéknak!!');
        process.exit();
      }
      codeDoor();
  }
};

const guard2 = () => { // Guard2
  console.log('');
  console.log('Sikerült, helyes a kód, kinyílt az ajtó!!! Kifele menet azonban egy őrrel találod magadat szemben');
  console.log('');
  console.log('Az alábbi lehetőségek közül választhatsz:');
  console.log('');
  console.log('1. Megütöd az őrt.');
  console.log('2. Visszamenekülsz az udvarra');
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  console.log('Az őr életpontjai: ', guard2Health);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      console.clear();
      if (vascso === false) {
        if (guard2Health - playerDamage2 > 0) {
          guard2Health = guard2Health - playerDamage2;
          console.clear();
          console.log('Sebeztél az őrön', playerDamage2, 'egységet, de rögtön visszaütött, így vesztettél', guard2Damage, 'egységnyi életpontot');
        } else {
          guard2Health = 0;
        }
      }
      if (vascso === true) {
        if (guard2Health - playerDamage1 > 0) {
          guard2Health = guard2Health - playerDamage1;
          console.clear();
          console.log('Sebeztél az őrön', playerDamage1, 'egységet, de rögtön visszaütött, így vesztettél', guard2Damage, 'egységnyi életpontot');
        } else {
          guard2Health = 0;
        }
      }
      if (guard2Health > 0) {
        if (playerHealth - guard2Damage > 0) {
          playerHealth = playerHealth - guard2Damage;
        } else {
          playerHealth = 0;
        }
      }
      if (playerHealth === 0) {
        console.log('Ütése halálosnak bizonyult! Meghaltál, vége a játéknak!');
        console.log('');
        console.log('Életpontjaid: ', playerHealth);
        console.log('Az őr életpontjai: ', guard2Health);
        process.exit();
      }
      if (guard2Health === 0) {
        console.log('Megölted az őrt!! Szabad vagy, mehetsz, amerre látsz! Szép munka volt!!');
        process.exit();
      }
      fight2();
      break;
    case '2':
      console.clear();
      console.log('Az udvaron szembe találod magadat egy csapatnyi őrrel, akik fülest kaptak a szökésedről. Bekerítenek és esélyed sincs elmenekülni! Egy sötét cellába zárnak, ahonnan soha nem fogsz kijutni! Vége a játéknak!!');
      process.exit();
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      guard2();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      guard2();
  }
};

const fight2 = () => {
  console.log('Az alábbi lehetőségek közül választhatsz: ');
  console.log('1. Ismét megütöd az őrt.');
  console.log('2. Visszamenekülsz az udvarra');
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  console.log('Az őr életpontjai: ', guard2Health);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      console.clear();
      if (vascso === false) {
        if (guard2Health - playerDamage2 > 0) {
          guard2Health = guard2Health - playerDamage2;
          console.clear();
          console.log('Sebeztél az őrön', playerDamage2, 'egységet, de rögtön visszaütött, így vesztettél', guard2Damage, 'egységnyi életpontot');
        } else {
          guard2Health = 0;
        }
      }
      if (vascso === true) {
        if (guard2Health - playerDamage1 > 0) {
          guard2Health = guard2Health - playerDamage1;
          console.clear();
          console.log('Sebeztél az őrön', playerDamage1, 'egységet, de rögtön visszaütött, így vesztettél', guard2Damage, 'egységnyi életpontot');
        } else {
          guard2Health = 0;
        }
      }
      if (guard2Health > 0) {
        if (playerHealth - guard2Damage > 0) {
          playerHealth = playerHealth - guard2Damage;
        } else {
          playerHealth = 0;
        }
      }
      if (playerHealth === 0) {
        console.log('Ütése halálosnak bizonyult! Meghaltál, vége a játéknak!');
        console.log('');
        console.log('Életpontjaid: ', playerHealth);
        console.log('Az őr életpontjai: ', guard2Health);
        process.exit();
      }
      if (guard2Health === 0) {
        console.clear();
        console.log('Megölted az őrt!! Szabad vagy, mehetsz, amerre látsz! Szép munka volt!!');
        console.log('');
        console.log('Életpontjaid: ', playerHealth);
        console.log('Az őr életpontjai: ', guard2Health);
        process.exit();
      }
      fight2();
      break;
    case '2':
      console.clear();
      console.log('Az udvaron szembe találod magadat egy csapatnyi őrrel, akik fülest kaptak a szökésedről. Bekerítenek és esélyed sincs elmenekülni! Egy sötét cellába zárnak, ahonnan soha nem fogsz kijutni! Vége a játéknak!!');
      process.exit();
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      fight2();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      fight2();
  }
};

const keyDoor = () => {
  if (kulcs === false) {
    console.log('Az alábbi lehetőségek közül választhatsz:');
    console.log('');
    console.log('1. Megpróbálod a kulccsomóval kinyitni az aljtót.');
    console.log('2. Visszamész az udvar kiinduló pontjához.');
  }
  if (kulcs === true) {
    console.log('Nincs nálad kulcs! Az alábbi lehetőség(ek) közül választhatsz:');
    console.log('');
    console.log('2. Visszamész az udvar kiinduló pontjához.');
  }
  console.log('');
  console.log('n. Megnézed, hogy milyen tárgyak vannak nálad');
  console.log(quit);
  console.log('');
  console.log('Életpontjaid: ', playerHealth);
  let choose = readline.question('');
  switch (choose) {
    case '1':
      console.clear();
      if (kulcs === false) {
        console.log('Sajnos a kulcscsomó egyik kulcsa sem nyitja');
        keyDoor();
      } else {
        console.clear();
        console.log(undif);
        console.log('');
        keyDoor();
      }
      break;
    case '2':
      console.clear();
      udvar();
      break;
    case 'n':
      console.clear();
      for (let i = 0; i < artifacts.length; i++) {
        process.stdout.write(artifacts[i]);
      }
      console.log('');
      keyDoor();
      break;
    case 'k':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(undif);
      console.log('');
      keyDoor();
  }
};

first();
