const one = [
  "Если бы вы не работали здесь, чем бы тогда вероятнее всего занимались сейчас?",
  "Как вы стали ...(название должности)?",
  "Что вас больше всего удивило на этой работе?",
  "Какое самое нелепое поручение когда-либо давал вам босс?",
  "Что было бы для вас более предпочтительным — работать четыре дня в неделю по 10 часов или пять дней по 8?",
  "Если бы вы имели гарантированный успех на какой-либо должности, чем бы предпочли заниматься?",
  "Какой была ваша первая работа? Она вам нравилась?",
  "Какой наиболее ценный совет в плане профессионального развития вы когда-либо получали? А какой был наихудшим?",
  "Вы читаете какую-либо интересную книгу сейчас? Мне бы хотелось получить какие-нибудь рекомендац",
  "А как на счет шоу?",

  "Есть ли в вашем телефоне какие-либо приложения, без которых вы уже не можете жить?",
  "Если бы у вас была возможность смотреть только один из жанров кино всю оставшуюся жизнь, что бы вы выбрали? А как насчет музыкальных предпочтений?",
  "Какую книгу из тех, которой все восхищались, вы ненавидели? И наоборот?",
  "Есть ли у вас какие-либо рекомендации в отношении подкастов?",
  "Какой из фильмов, которые вы просмотрели за последнее время, заставил вас плакать? А громко смеяться?",
  "Кого бы вы хотели видеть своим партнером по реалити-шоу Amazing Race («Удивительная гонка»)? В наших реалиях можно задать аналогичный вопрос о передачах вроде «Форт Боярд» или «Последний герой».",
  "Кто ваш фаворит в Instagram? И наоборот? Ах, у вас нет Instagram? Почему?",

  "Если бы вам сказали, что до конца жизни вы можете есть только один продукт, что бы это было?",
  "Какое самое странное блюдо вы пробовали когда-либо в своей жизни?",
  "Какая привычная еда является для вас наиболее комфортной?",
  "Есть ли такая еда, которую вы никогда не будете есть?",
  "Посоветуйте, что можно легко и без проблем взять с собой на работу/учебу в качестве ланча, только это не должны быть бутерброды.",
  "Где здесь можно недорого поесть?",
  "Есть ли в вашей семье какие-либо кулинарные секреты или традиционные рецепты?",
  "Какой ваш любимый ресторан/кафе из тех, которые не очень известны широкому кругу лиц?",

  "Есть ли где-то поблизости «райское» местечко для отдыха?",
  "Если бы у вас была возможность полететь куда-либо абсолютно бесплатно, куда бы вы отправились?",
  "Какое самое крутое автопутешествие вам когда-либо довелось совершить?",
  "Какое путешествие вы совершили во время вашего последнего отпуска? Чем вы там занимались? Что вам запомнилось?",
  "Какой вид отдыха вы предпочитаете — активный или релаксационный где-нибудь на уютном пляже?",
  "Какое следующее путешествие уже запланировали?",
  "Если бы вам удалось взять отгул, или появилась возможность поработать на удаленном доступе, куда бы вы отправились и чем занимались бы?",
  "Чем вы больше всего любите заниматься на выходных?",

  "Где вы раньше жили? Чем тот город отличается от вашего теперешнего места жительства?",
  "Кем, будучи ребенком, вы хотели стать, когда повзрослеете?",
  "Есть ли у вас какие-то скрытые таланты или неожиданные увлечения?",
  "Чем вы любили заниматься в начальной школе (вне школьной программы)?",
  "Какой аксессуар или предмет был вашим «must-have» в детстве/подростковом возрасте, т.е., в период взросления?",
  "Что, из того, что когда-либо происходило с вами, было самым невероятным событием?",
  "Кто для вас был самым значимым человеком, наставником, примером для подражания?",
  "Какой из советов, который вам когда-либо давали, оказался самым ценным?",

  "Если бы вам доверили выбрать восемь объектов, которые бы получили статус «8 чудес света», что бы вы внесли в этот список?",
  "Что бы поместили в «капсулу времени» 15 лет назад?",
  "Какой из всех полученных вами комплиментов был самым странным?",
  "Вы когда-нибудь задумывались о «крутых» изобретениях или основании компаний, которые, как потом оказывалось, были уже сделаны или основаны?",
  "Если бы вы могли преподавать в колледже любой курс, какой предмет вы бы выбрали?",
  "Какой, абсолютно не характерный для вас, поступок вы когда-либо совершали?",
  "Какой сверхспособностью вы бы хотели обладать?",
  "Если бы у вас была возможность завести абсолютно любое домашнее животное, кого бы вы выбрали?",

  //New
  "Если бы вам навсегда запретили заниматься вашей нынешней работой, какую новую профессию вы бы выбрали?",
  "Если бы у вас была возможность больше никогда не работать, вы бы ею воспользовались?",
  "Снились ли вам сны, которые вы запомнили на всю жизнь?",
  "Каким человеком вы восхищаетесь?",
  "Хотели бы вы дружить с таким человеком, как вы?",
  "Каким было самое красивое место, в котором вам довелось побывать?",
  "Если бы вы могли поехать куда угодно, в какую точку планеты вы бы отправились?",
  "Если бы вы могли жить где угодно, что за место это было бы?",
  "Если бы список 7 чудес света нужно было составить заново, что бы вы в него включили?",
  "Что именно каждый человек должен хотя бы раз испытать в своей жизни?",
  "Чего вы боитесь больше всего на свете?",
  "Было ли у вас в жизни событие, когда казалось, что все плохо, а потом выяснилось, что все к лучшему?",
  "Есть ли фильмы или книги, которыми все восхищаются, а вы терпеть их не можете, и наоборот?",
  "Вы когда-нибудь плакали над книгой или фильмом? Какие книги и фильмы это были?",
  "Если бы вы могли стать персонажем книги или фильма, то каким?",
  "Если бы ваша жизнь была фильмом, как бы он назывался?",
  "Какой самый странный комплимент вам когда-либо говорили?",
  "Какая самая неловкая ситуация была у вас в жизни?",
  "У вас есть какие-нибудь «постыдные удовольствия», которые, однако, дают вам ощущение счастья и полноты жизни?",
  "Если бы вы могли изменить какую-то одну вещь в своем прошлом, что бы это было?",
  "А если бы вы могли изменить какую-то одну вещь в мире, что бы вы выбрали?",
  "Если бы вы до конца жизни должны были есть только один продукт, что бы это было?",
  "Если бы вы должны были проживать один и тот же день снова и снова, какой день в своей жизни вы бы выбрали?",
  "Хотели бы вы стать бессмертным?",
  "Если бы вам осталось жить год, как бы вы его провели?",
  "Если бы вы могли дать совет самому себе в 15 лет, что бы это было?",
  "Какое ваше лучшее воспоминание из детства?",
  "Если бы в детстве вы могли положить все свои самые любимые вещи в капсулу времени и отправить в будущее, какие предметы бы там оказались?",
  "Как вы представляете свой идеальный день?",
  "Если бы вы могли иметь в собственности только 5 вещей, какие бы вещи это были?",
  "Какова самая мудрая мысль, которую вы когда-либо слышали?",
  "Если бы у вас была возможность за полчаса научиться чему угодно, чему бы вы научились?",
  "Если бы у вас была возможность навсегда остаться в каком-то возрасте, какой возраст вы бы выбрали?",
  "Если бы можно было вновь начать свою жизнь с 10-летнего возраста, но при этом сохранив весь ваш опыт и знания, вы бы сделали это?",
  "Если бы вы могли выбирать эпоху, в которой жить, какая подошла бы вам лучше всех?",
  "Если бы вы могли своими глазами увидеть любое событие из прошлого, настоящего или будущего, что бы вы выбрали?",
  "Какую сверхспособность вам хотелось бы иметь?",
  "Если нужно было бы выбрать только один вариант, вы бы хотели, чтобы ваш ребенок вырос умным или добрым?",
  "Если бы вам предложили вечную молодость и кучу денег с условием, что у вас никогда не будет любви и семьи, вы бы согласились?",
  "Есть какая-то информация или теория, в которую вы просто верите, так как у нее нет доказательств? Почему?",

  "Вы обедаете с человеком, которого очень уважаете. Неожиданно он начинает рассказывать гадкую сплетню про вашего близкого друга и насмехаться над ним, не зная, что он ваш друг. Что вы будете делать?",
  "Вы на один день получили доступ к твиттеру Джоан Роулинг. Какую новую информацию о волшебном мире вы бы опубликовали?",
  "Вы возвращаетесь домой с работы и видите, что ваше место занял клон, а супруг и дети не заметили подмены. Как доказать, что их настоящий родственник — вы?",
  "После развода вы находите в квартире лотерейный билет, который купил ваш бывший супруг, и выигрываете $ 100 тыс. Поделитесь с бывшим?",
  "Если бы вы оказались на месте Нео в фильме «Матрица», то хотели бы узнать правду или остаться в неведении?",
  "Представьте, что вы можете стать самым красивым человеком на планете, но при каждом первом поцелуе будете непроизвольно икать. Согласитесь?",
  "Вы получите $ 1 млн, если спрячете связку ключей так, чтобы вся полиция страны в полном составе не смогла найти их. Куда вы их спрячете?",
  "Вы узнали, что ваш лучший друг — тот самый человек, который грабит на дороге водителей дорогих машин, отбирая деньги и драгоценности, а потом отдает их на лечение детям, больным раком. Сдадите ли вы его полиции?",
  "Вы — единственный хирург в больнице. Вам только что сообщили, что ваши родные погибли в ДТП, водитель был пьян. Спустя минуту его в тяжелом состоянии привозят в операционную. Как вы поступите?",
  "Представьте, что вы можете выбрать, оставить мир таким, какой он есть, или избавить его от войн и конфликтов, но и интернет тоже навсегда исчезнет. Что решите?",
  "Представьте, что существует волшебная таблетка, которая дает принявшему ее человеку красоту, удачу во всех делах и счастливую судьбу. Но на следущий день после своего 35-летия этот человек умрет. Приняли бы вы такую таблетку?",
  "Вам предложили заморозить ваше тело на 200 лет совершенно бесплатно в любой момент, когда вы этого захотите. Согласитесь?",
  "Допустим, что жизнь после смерти существует. Как бы выглядели ад и рай, если бы их придумали вы?",

  "Если бы вы прославились, то чем вы были бы знамениты?",
  "Что бы вы предпочли: иметь 3 ноги или 3 руки?",
  "Что бы вы предпочли: иметь кота в теле собаки или собаку в теле кота?",
  "Что бы вы предпочли: читать мысли или видеть сквозь стены?",
  "Что бы вы предпочли: быть самым богатым человеком в мире или самым умным?",
  "Что бы вы предпочли: уметь говорить на всех языках мира или уметь разговаривать с животными?",
  "Что бы вы предпочли: уметь читать чужие мысли или летать?",
  "Что бы вы предпочли: жить в браке с человеком, который любит вас, но вы его не любите, или с тем, кого безответно любите вы?",
  "Что бы вы предпочли: выглядеть как 20-летний, но чувствовать себя как 80-летний или выглядеть как 80-летний, но чувствовать себя как 20-летний?",
  "Что бы вы предпочли: уметь стирать свои воспоминания или воспоминания других людей?",
  "Что бы вы предпочли: обладать неземной красотой или непревзойденным чувством юмора?",
  "Что бы вы предпочли: обладать фотографической памятью или невероятно высоким IQ?",
  "Что бы вы предпочли: аллергию на шоколад или аллергию на смартфон?",
  "Что бы вы предпочли: никогда больше не услышать музыку или потерять способность читать? Что выберете?",
  "Что бы вы предпочли: не различать никаких вкусов или видеть мир в черно-белом цвете?",
  "Что бы вы предпочли: стать вампиром или оборотнем?",
  "Что бы вы предпочли: хобот, как у слона, или шею, как у жирафа?",
  "Что хуже: потерять зрение или слух?",
  "Представьте, что гены эмбриона во время беременности можно изменять без побочных эффектов. Вы бы разрешили делать это, чтобы изменить пол ребенка или его внешность?",
  "Некоторые люди думают, что содержать животных в зоопарках жестоко. Даже если у них просторные вольеры и вдоволь еды, это не заменит жизни на свободе. Согласны вы с этим или нет? Почему?",
  "Можно ли приравнять пиратство в интернете (скачивание фильмов и музыки) к воровству товаров из магазина?",
  "В Исландии недавно приняли закон, согласно которому все жители страны с 18 лет по умолчанию становятся донорами органов (но можно написать отказ). Хотели бы вы, чтобы у нас в стране был такой закон?",
  "Как вы считаете, может ли искусственный интеллект в будущем уничтожить человечество?",
  "Какая общая идея могла бы объединить людей на планете?",

  //
  "В каком возрасте вы в первый раз поцеловались?",
  "Какие комплименты вам больше всего нравится получать?",
  "Что бы хотели сделать, но стесняетесь?",
  "Какой самый безумный поступок вы совершали в своей жизни?",
  "Что бы вы сделали, если бы могли поменять пол на один день?",
  "Какое у тебя хобби?",
  "Мог бы ты зарабатывать деньги своим хобби?",
  "Какое хобби ты считаешь самым скучным, которым бы ты не смог никогда увлечься?",
  "Ты бы предпочел бы хорошо писать, рисовать или петь?",
  "Ты бы предпочел провести вечер со своими друзьями или со своим хобби?",
  "С кем из семьи у тебя самые близкие отношения?",
  "Куда бы ты хотел отправиться в следующее путешествие?",

  "Если бы ты мог пригласить кого-нибудь на ужин (близкого человека, умершего родственника, знаменитость), кого бы ты выбрал?",
  "Хотел бы ты быть знаменитым? В чем?",
  "Прежде чем сделать выжный звонок, ты проговриваешь возможный диалог у себя в голове?",
  "Каким был бы для тебя «идеальный день»?",
  "Когда ты в последний раз пел в одиночестве? А для кого-нибудь другого?",
  "Если бы ты мог прожить до 90 лет и в последние 60 лет сохранить либо разум, либо тело 30-летнего, что бы ты выбрал?",
  "У тебя есть тайное предчувствие того, как ты умрешь?",
  "Назови три черты, которые, по-твоему, есть и у тебя, и у твоего партнера.",
  "За что ты испытываешь наибольшую благодарность?",
  "Если бы ты мог, что бы ты изменил в том, как тебя воспитывали?",
  "За 4 минуты расскажи историю твоей жизни настолько подробно, насколько это возможно.",
  "Если бы ты мог проснуться завтра, обладая каким-то умением или способностью, что бы это было?",
  "Если бы магический кристалл мог открыть тебе правду, о чем бы ты хотел узнать?",
  "Есть ли что-то, что ты уже давно мечтаешь сделать? Почему ты еще не сделал этого?",
  "Какое самое большое достижение в твоей жизни?",
  "Что в дружбе для тебя наиболее ценно?",
  "Какое твое самое дорогое воспоминание?",
  "Какое твое самое ужасное воспоминание?",
  "Если бы ты знал, что умрешь через год, что бы ты изменил в том, как ты живете? Почему?",
  "Что для тебя значит дружба?",
  "Какую роль любовь и нежность играют в твоей жизни?",
  "В твоей семье отношения теплые и близкие?",
  "Продолжите фразу: «Я бы хотел, чтобы был кто-то, с кем можно разделить…»",
  "Поделись неприятной ситуацией или смущающим моментом из твоей жизни.",
  "Когда ты в последний раз плакал при ком-нибудь? А в одиночестве?",
  "По-твоему, какая тема слишком серьезна, чтобы шутить об этом?",
  "Если бы ты должен был умереть сегодня до конца дня, ни с кем не поговорив, о чем несказанном ты бы больше всего жалел? Почему ты еще не сказал этого?",
  "Твой дом со всем имуществом загорелся. После спасения близких и домашних животных у тебя есть время, чтобы забежать в дом и спасти еще что-то. Что бы ты взял? Почему?",
  "Смерть кого из членов твоей семьи расстроила бы тебя больше всего? Почему?",

  //
  "Какие детские повадки в тебе все еще есть?",
  "Сколько телефонов ты сломал или потерял?",
  "Кто или что твой заклятый враг?",
  "Самые бесполезные действия/вещь, которые ты знаешь, как сделать/совершить?",
  "В чем ошибается большинство людей?",
  "Что бы ты никогда НЕ сделал за 5 миллионов долларов?",
  "Какое рискованное действие ты сделал, которое по итогу окупилось?",
  "Если бы ты мог выучить только одно магическое заклинание, но оно бы могло сделать только что-то обыденное и скучное, что бы это заклинание сделало?",
  "Ты просыпаешься внезапно посреди ночи. Какой самый страшный звук можно услышать после пробуждения?",
  "Как ты думаешь, на какую вышестоящую должность можно пробраться без опыта, и никто бы не заметил твою ложь по итогу?",
  "Каковы будут последствия научного открытия, которое бы увеличило продолжительность жизни людей до 500 лет?",
  "Какой фильм ты можешь смотреть снова и снова и не уставать?",
  "Если бы ты спроектировал и построил дом на дереве, как бы он выглядел и что бы в нем было?",
  "Какой самый интересный кусочек информации, о котором ты знаешь?",
  "Что тебе действительно нравилось, когда ты был моложе, но теперь ты думаешь, что это глупо?",
  "Ты отвечаешь за то, чтобы сделать насекомых популярным продуктом питания. У тебя есть 1 миллиард долларов для достижения этой цели. Как ты это сделаешь?",
  "В какой ситуации с наибольшим давлением ты когда-либо оказывался, и как ты с ней справился?",
  "Что-то, чем ты действительно был обеспокоен, но в итоге оказалось, там не было ничего страшного?",
  "Что ты устал слышать?",
  "Какое событие оказало наибольшее влияние на то, кем ты являешься сегодня?",
  "Что сейчас делает общество, над чем будут смеяться и что будут высмеивать через 20 лет?",
  "Какой двойной стандарт является глупым/нелепым и должен быть прекращен?",
  "Твоя худшая история о сервисе обслуживании клиентов - со стороны клиента или работника?",
  "Если бы тебе пришлось выбрать одну цель, которой ты должен посвятить свою жизнь, что бы это было?",
  "Если бы ты умер сегодня, каким было бы твоё самое большое достижение на данный момент?",
  "Что ты сделал для того, чтобы мир стал лучше?",
  "С какими людьми ты встречался только один раз, но они произвели на тебя большое впечатление?",
  "Как ты думаешь, что является наиболее распространенной жалобой людей в твоей стране?",
  "Какой вопрос можно кому-нибудь задать, чтобы узнать о них больше всего?",
  "Ситуация, в которой ты висел на волоске?",
  "Если бы ты мог стать экспертом номер один в како-то определенной нишевой области, что бы это было?",
  "Самая худшая покупка, которую ты когда-либо делал?",
  "Что ты считал глупым, пока не попробовал?",
  "Кто твой любимый автор?",
  "О чем ты мечтаешь, когда мечтаешь?",
  "Во что ты веришь, хотя знаешь, что это неправильно?",
  "Какие признаки/знаки заставляют тебя думать, что кто-то будет успешен?",
  "Какой самый необычный, но забавный опыт у тебя был?",
  "Какая самая странная привычка у тебя была в детстве?",
  "Какая пища самая раздражающая?",
  "На какую видеоигру ты бы хотел, чтобы была похожа жизнь?",
  "Что для тебя значит дружба?",
  "На кого или на что у тебя всегда есть время?",
  "На какие две вещи ты никогда не потратишь деньги?",
  "О чем тебе нужно пожаловаться или выговориться?",
  "Какое плохое решение стало самым лучшим твоим решением?",
  "Что может быть такого в фильме, чтобы заставить тебя встать и уйти?",
  "Какой был твой любимый мультфильм, когда ты рос?",
  "Какие вещи люди делали самоотверженно, чтобы сделать твою жизнь лучше?",
  "Чем ты владеешь по поводу чего люди дают много комментариев?",
  "Если бы ты мог повысить свой уровень жизни так же, как в видеоиграх, куда бы ты поставил свой следующий балл?",
  "Что ты делал не так на протяжении большей части своей жизни, и только недавно нашел правильный способ делать это?",
  "Какой у тебя идеальный гамбургер?",
  "Какой твой любимый вымышленный злодей?",
  "Тебе дают 300 тысяч долларов, чтобы сделать одну комнату в твоем доме или квартире смехотворно удивительной. Какую комнату ты выберешь, и какие улучшения ты сделаешь?",
  "Какие игры или спорт скучные на твой взгляд, и как их оживить?",
  "В какой игре ты всегда проигрываешь?",
  "Что ты любите делать, что традиционно считается женским?",
  "Какая самая странная вещь, которую ты ел в детстве?",
  "Если бы время не было проблемой, и тебе было бы нужно овладеть каким-то навыком, что бы это было?",
  "В чем ты настолько ужасен, что бросил это занятие и больше никогда не будешь делать его снова?",
  "Последний фильм, который заставил тебя плакать?",
  "О каких мелочах ты всегда волнуешься?",
  "Если бы ты мог добавить 4 часа в свой день, на что бы ты их потратил?",
  "Что каждый должен испытать хотя бы раз в жизни?",
  "Куда бы ты хотел переехать?",
  "Какое у тебя самое раннее воспоминание?",
  "Какими веб-сайтами ты пользовался все время, но потом перестал?",
  "Какая знаменитость была бы худшей кандидатурой, с кем можно было бы пообедать?",
  "Что-то очевидное, что ты бы никогда не заметил, пока кто-то не указал тебе на это?",
  "Какая мелочь делает тебя злее, чем следовало бы?",
  "Если бы твой дом загорелся, какую вещь ты бы хотел спасти больше всего? (Предполагая, что все люди или животные уже благополучно выбрались и были спасены).",
  "Какая странная комбинация вкусов тебе действительно нравится?",
  "Что-то, что тебя реально раздражает, когда это делают другие люди, но ты в свою очередь иногда тоже это делаешь?",
  "Какой непонятный сайт ты абсолютно любишь?",
  "Какие случайные акты чрезвычайной доброты ты видел или о которых ты слышал?",
  "Какой самый полезный навык ты когда-либо изучал или приобрёл?",
  "Если бы тебе дали возможность создать одну новую тенденцию и она была бы сразу популярной, какую тенденцию ты бы создал?",
  "О чём ты слишком много знаешь?",
  "Если бы было решено, что все страны будут упразднены, и вся земля станет одним единым политическим органом, какой город будет столицей Земли? Каким бы был флаг и гимн Земли?",
  "Какие лучшие 10$ ты когда-либо тратил?",
  "Какой случайный комплимент, который кто-то тебе дал, действительно запал в твою память?",
  "Если бы ты мог вернуться в прошлое и вдохновить кого-то сделать современное изобретение, какое изобретение и в какой период истории продвинуло бы человечество больше всего?",
  "Что у тебя на заставке телефона и / или компьютера?",
  "Какая твоя любимая настольная или карточная игра? А что насчет твоей наименее любимой игры?",
  "Что было худшим, что ты когда-либо пробовал?",
  "Если бы ты был призраком, как бы ты охотился?",
  "Одна вещь, если которую делать каждый день, она сможет значительно улучшить жизнь?",
  "Что делает тебя особенным и уникальным?",
  "За что ты судишь людей, но, вероятно, не должен этого делать?",
  "Какой последний фильм ты хотел бы увидеть перед смертью?",
  "Назови две вещи, которыми ты больше всего увлечен?",
  "Что нужно увидеть или испытать лично, чтобы действительно оценить это?",
  "Какой ингредиент или специю ты презираешь?",
  "Какую самую нелепую татуировку ты когда-либо видел?",
  "Какая самая паранормальная вещь, которая случилась с тобой?",
  "Какой фильм был бы лучше, если бы сюжет происходил задом наперёд (оригинальный конец был бы в начале, а оригинальное начало в конце)?",
  "Что в настоящее время законно, но не будет через десять или двадцать лет?",
  "В чём бы ты хотел быть лучшим в мире?",
  "Что ты сделал уже кучу раз, но все еще невероятно плох в этом?",
  "Для чего ты слишком стар, но все еще этим наслаждаешься?",
  "Что было весело делать один раз, но ты больше никогда не будешь делать это снова?",
  "Если бы ты мог выбрать один музыкальный инструмент и сразу же стать виртуозом, какой инструмент ты бы предпочел?",
  "Расскажи свою лучший анекдот?",
  "Какую последнюю большую цель ты достиг?",
  "Какая самая тяжелая телесная травма, которую ты когда-либо получал?",
  "Самый худший магазин для покупки подарочной карты на 1000 долларов?",
  "Последний раз, когда твой день стал лучше благодаря незнакомому тебе человеку?",
  "В чем проявляется твоя творческая отдушина?",
  "Что люди идеализируют, но на самом деле не должны?",
  "Если бы ты мог добавить одно правило, которому должны следовать все, когда пользуются Интернетом, что бы это было?",
  "Что оказалось хуже, чем ты предполагал?",
  "Что ты хотел сделать уже давно, но еще не сделал?",
  "Какая была самая худшая ситуация, когда кто-то обмолвился по отношению тебя или в целом?",
  "Какое занятие или хобби настолько заполнено людьми, переполненных ненавистью, что это отталкивает тебя от того, чтобы это попробовать?",
  "Какое твоё продолжение фразы “вот в моё время, мы …”?",
  "Кто самый смешной актер или актриса, которые все еще снимаются в фильмах, телешоу или на YouTube?",
  "Что тебе нравится больше всего в своих днях?",
  "Какое самое странное хобби, о котором ты слышал?",
  "Какой язык тебе нравится, как звучит, даже если ты не знаешь, как на нем говорить?",
  "Дай определение словосочетанию “хороший человек”?",
  "Если бы тебе дали 20 000 долларов на организацию невероятно потрясающей вечеринки, собрания или мероприятия, как бы оно выглядело?",
  "Когда в последний раз ты чувствовал себя совершенно не в теме?",
  "Расскажи про свои маленькие удовольствия, которые делают тебя счастливее, чем следовало бы?",
  "Какой пост из социальных сетей действительно застрял в твоей голове?",
  "Какие общие советы или слова мудрости на самом деле не имеют смысла?",
  "Если бы тебе пришлось застрять в одном возрасте навсегда, какой возраст ты бы выбрал?",
  "Дай пример современного шедевра?",
  "Какие бесполезные фрагменты информации ты запомнил и, вероятно, никогда уже не забудешь?",
  "Какая цитата навсегда отложилась у тебя в голове?",
  "Худшее животное, кем можно быть съеденным?",
  "Какая тема, помимо религии и политики, всегда горячо обсуждается в кругу друзей и знакомых?",
  "Что выглядит так, будто оно должно быть на вкус лучше, чем на самом деле?",
  "Если бы Олимпиада была для простых людей, какими бы были там мероприятия/соревнования?",
  "Какой бы была полная противоположность тебя?",
  "Что бы ты порекомендовал кому-то, если бы у них был выходной и они не знали, что делать?",
  "Как ты себе представляешь жизнь сверхбогатых людей?",
  "Какую самую большую «сцену» ты видел на публике?",
  "Твоя лучшая рекомендация подкаста?",
  "Что происходит чаще, чем хотелось бы?",
  "Кто был бы лучшим домашним животным?",
  "Что ты узнал нового на этой неделе?",
  "Какое глупое правило ты был вынужден соблюдать?",
  "Самое абсурдное, что стало частью реальности?",
  "Как ты думаешь, твоё детство было лучше или хуже, чем у людей, выросших в подобном месте и в подобное время?",
  "Твоя самая частая мысль, когда ты просыпаешься?",
  "О чем ты жалеешь?",
  "Самая важная вещь, которую ты сделал в своей жизни?",
];

export const group = {
  one,
};
