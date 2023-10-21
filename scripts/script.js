new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
        name: "Lost Princess",
        artist: "페코린느 (CV : M · A · O), 코코로 (CV : 이토 미라이), 캬루 (CV : 타치바나 리카)",
        cover: "cover/1.jpg",
        source: "audio/01.Lost Princess.mp3"
      },
      {
        name: "연결하는 것",
        artist: "유이(CV:타네다 리사), 히요리(CV:히가시야마 나오), 레이(CV:하야미 사오리)",
        cover: "cover/2.jpg",
        source: "audio/02.つなぐもの.mp3"
      },
      {
        name: "빛나는 미래",
        artist: "노조미 (CV : 히카사 요코), 치카 (CV : 후쿠하라 아야카), 츠무기 (CV : 키토 이부키)",
        cover: "cover/3.jpg",
        source: "audio/03.Shining Future.mp3",
      },
	  {
        name: "너의 미소를 보고 싶으니까",
        artist: "노조미(CV:히카사 요코)",
        cover: "cover/3.jpg",
        source: "audio/04.君の笑顔が見たいから.mp3"
      },
		{
        name: "바람에 맹세",
        artist: "노조미 (CV : 히카사 요코), 치카 (CV : 후쿠하라 아야카), 츠무기 (CV : 키토 이부키)",
        cover: "cover/5.jpg",
        source: "audio/05.風への誓い.mp3"
      },
		{
        name: "아마노 잭 하트!",
        artist: "미미 (CV : 히다카 리나), 미소기 (CV : 모리 세이 스미레), 쿄우카 (CV : 고쿠라 유이), 츠무기 (CV : 키도 의상)",
        cover: "cover/6.jpg",
        source: "audio/06.アマノジャクハート！.mp3"
      },
		{
        name: "스마일리 콘트라스트",
        artist: "하츠네(CV:오하시 아야카), 시오리(CV:코시미즈 아미), 노조미(CV:히카사 요코), 리마(CV:도쿠이 푸른 하늘)",
        cover: "cover/7.jpg",
        source: "audio/07.Smiley Contrast.mp3"
      },
		{
        name: "리틀 어드벤처",
        artist: "미미 (CV : 히다카 리나), 미소기 (CV : 모리 세이 스미레), 쿄우카 (CV : 고쿠라 유이)",
        cover: "cover/8.jpg",
        source: "audio/08.リトルアドベンチャー.mp3"
      },
		{
        name: "에가오의 내 집",
        artist: "페코린느 (CV : M · A · O), 코코로 (CV : 이토 미라이), 캬루 (CV : 타치바나 리카), 사렌 (CV : 호리에 유이), 스즈메 (CV : 유키 아오이)",
        cover: "cover/9.jpg",
        source: "audio/09.えがおのマイホーム.mp3"
      },
		{
        name: "킨키라☆해피네스!",
        artist: "아키노 (CV : 마츠 아라시), 미후 유 (CV : 타쇼 아즈사), 유카리 (CV : 이마이 아사미), 타마키 (CV : 누마쿠라 아이미)",
        cover: "cover/10.jpg",
        source: "audio/10.キンキラ☆ハピネス！.mp3"
      },
		{
        name: "무관심 코드",
        artist: "오노 타카미츠",
        cover: "cover/11.jpg",
        source: "audio/11.Aloofness Code.mp3"
      },
		{
        name: "더! 두 사람의 파~티~나이트",
        artist: "시노부(CV:오츠보 유카), 미야코(CV:우미야텐)",
        cover: "cover/12.jpg",
        source: "audio/12.もっと！ふたりのパ～ティ～ナイト.mp3"
      },
		{
        name: "딩동 성야♪",
        artist: "아야네(CV:세리자와 유), 크루미(CV:우에다 카나)",
        cover: "cover/13.jpg",
        source: "audio/13.Ding Dong Holy Night♪.mp3"
      },
		{
        name: "커넥팅 해피!!",
        artist: "페코린느 (CV : M · A · O), 코코로 (CV : 이토 미라이), 캬루 (CV : 타치바나 리카)",
        cover: "cover/14.jpg",
        source: "audio/14.Connecting Happy!!.mp3"
      },
		{
        name: "우마뾰이 전설",
        artist: "스페셜 위크 (CV. 와키 아즈미), 사일런스 스즈카 (CV. 타카노 마리카), 토우 카이 테이오 (CV. Machico)",
        cover: "cover/15.jpg",
        source: "audio/15.うまぴょい伝説.mp3"
      },
		{
        name: "사이츠요, 그렇지?",
        artist: "안나(CV:타카노 아사미), 나나카(CV:카무라 하루카)",
        cover: "cover/16.jpg",
        source: "audio/16.サイツヨでしょ、でしょ？.mp3"
      },
		{
        name: "슈퍼 초콜릿",
        artist: "시즈루 (CV : 이쿠 텐메 히토미), 리노 (CV : 아스미 카나)",
        cover: "cover/17.jpg",
        source: "audio/17.SUPER CHOCOLATE.mp3"
      },
		{
        name: "절대비밀",
        artist: "노래 (CV : 타치바나 리카)",
        cover: "cover/18.jpg",
        source: "audio/18.Absolute Secret.mp3"
      },
		{
        name: "여행의 계절",
        artist: "페코린느 (CV : M · A · O), 코코로 (CV : 이토 미라이), 캬루 (CV : 타치바나 리카)",
        cover: "cover/19.jpg",
        source: "audio/19.旅立ちの季節.mp3"
      },
		{
        name: "Peaceful X 찬 푸루",
        artist: "노래/이리야(CV:단시타 벚꽃), 마호(CV:우치다 마사), 카오리(CV:타카모리 나츠미)",
        cover: "cover/20.jpg",
        source: "audio/20.Peacefulxちゃんぷるー.mp3"
      },
		{
        name: "미해결 마음",
        artist: "마코토(CV:코마츠 미카코), 카스미(CV:미나세 이노리)",
        cover: "cover/21.jpg",
        source: "audio/21.未解決な想い.mp3"
      },
		{
        name: "흰 날개 글로리에",
        artist: "페코린느 (CV : M · A · O), 코코로 (CV : 이토 미라이), 캬루 (CV : 타치바나 리카)",
        cover: "cover/22.jpg",
        source: "audio/22.白翼のグローリエ.mp3"
      },
		{
        name: "등받이 첫키스",
        artist: "이오(CV:이토 시즈카), 미사키(CV:쿠노 미사키), 스즈나(CV:우에사카 스미레)",
        cover: "cover/23.jpg",
        source: "audio/23.背伸びFirst Kiss.mp3"
      },
		{
        name: "우리는 황금빛",
        artist: "마호 (CV : 우치다 마요), 마코토 (CV : 코마츠 미카코), 카오리 (CV : 타카모리 나츠미)",
        cover: "cover/24.jpg",
        source: "audio/24.We Are Golden.mp3"
      },
		{
        name: "나카요시 감각",
        artist: "유니(CV:오하라 호미), 치에르(CV:사쿠라 아야네), 클로에(CV:타네사키 아츠미)",
        cover: "cover/25.jpg",
        source: "audio/25.なかよしセンセーション.mp3"
      },
		{
        name: "트릭 홀릭",
        artist: "미미 (CV : 히다카 리나), 쿄우카 (CV : 고쿠라 유이), 미소기 (CV : 모리 세이 스미레)",
        cover: "cover/26.jpg",
        source: "audio/26.トリックホリック.mp3"
      },
		{
        name: "신기루 게임",
        artist: "페코린느 (CV : M · A · O), 코코로 (CV : 이토 미라이), 캬루 (CV : 타치바나 리카), 유이 (CV : 타네다 리사), 히요리 (CV : 히가시야마 나오), 레이 (CV : 하야미 사오리) ), 셰피 (CV : 콘도 레나)",
        cover: "cover/27.jpg",
        source: "audio/27.Mirage Game.mp3"
      },
		{
        name: "맞아! 소중한 하모니!",
        artist: "페코린느 (CV : M · A · O), 코코로 (CV : 이토 미라이), 캬루 (CV : 타치바나 리카)",
        cover: "cover/28.jpg",
        source: "audio/28.Yes! Precious Harmony!.mp3"
      },
		{
        name: "전화해 달링!",
        artist: "노조미 (CV : 히카사 요코), 치카 (CV : 후쿠하라 아야카), 츠무기 (CV : 키토 이부키)",
        cover: "cover/29.jpg",
        source: "audio/29.Call Me Darling!.mp3"
      },
		{
        name: "화염에",
        artist: "이노리 (후지타 아카네), 카야 (코이치 마코토), 호말레 (오니시 사오리)",
        cover: "cover/30.jpg",
        source: "audio/30.in flames.mp3"
      },
		{
        name: "최고 시작 대시",
        artist: "페코린느 (CV : M · A · O), 코코로 (CV : 이토 미쿠 ), 캬루 (CV : 타치바나 리카), 스즈메 (CV : 유키 아오이)",
        cover: "cover/31.jpg",
        source: "audio/31.SAIxKOUスタートダッシュ.mp3"
      },
		{
        name: "나무 모레비 몽타주",
        artist: "카스미(CV:미나세 이노리), 시오리(CV:코시미즈 아미)",
        cover: "cover/32.jpg",
        source: "audio/32.木もれびモンタージュ.mp3"
      },
		{
        name: "청춘 스피너",
        artist: "카스미(CV:미나세 이노리), 시오리(CV:코시미즈 아미)",
        cover: "cover/33.jpg",
        source: "audio/33.青春スピナー.mp3"
      },
		{
        name: "하트풀 플레이스",
        artist: "마힐(CV:닛타 에미), 린(CV:코이와이 코토리)",
        cover: "cover/34.jpg",
        source: "audio/34.Heartful Place.mp3"
      },
		{
        name: "페어리 테일은 꿈에",
        artist: "리노(CV:아스미카나)",
        cover: "cover/35.jpg",
        source: "audio/35.フェアリーテイルは夢の中.mp3"
      },
		{
        name: "황혼 태평 여로 노래",
        artist: "루카(CV:사토 리나)",
        cover: "cover/36.jpg",
        source: "audio/36.黄昏太平旅路唄.mp3"
      },
		{
        name: "그 여름의 기억",
        artist: "미사토 (CV : 쿠니 후다 마리코)",
        cover: "cover/37.jpg",
        source: "audio/37.あの夏のメモリー.mp3"
      },
		{
        name: "이봐, 제발!",
        artist: "요리(CV:하라 사유리), 아카리(CV:아사쿠라 안미)",
        cover: "cover/38.jpg",
        source: "audio/38.ねぇねぇPlease!.mp3"
      },
		{
        name: "역설",
        artist: "노래 / 레이 (CV : 하야미 사오리), 츠무기 (CV : 키토 이부키)",
        cover: "cover/39.jpg",
        source: "audio/39.Paradox.mp3"
      },
		{
        name: "빛나는! 사랑스러운 ★ 꿈꾸는",
        artist: "모니카 (CV : 츠지 아유미), 토모 (CV : 지하라 미사토)",
        cover: "cover/40.jpg",
        source: "audio/40.輝け!ラブリー★ドリーミー.mp3"
      },
		{
        name: "거룩한 열정 장미",
        artist: "사렌 (CV : 호리에 유이), 아키노 (CV : 마츠 아라시)",
        cover: "cover/41.jpg",
        source: "audio/41.Holy Passion Roses.mp3"
      },
		{
        name: "브랜드 뉴 선라이즈",
        artist: "무이미(CV.반메구미), 네네카(CV.이구치 유카)",
        cover: "cover/42.jpg",
        source: "audio/42.Brand New Sunrise.mp3"
      },
		{
        name: "사랑 빛나는 매직☆彡",
        artist: "리마 (CV : 도쿠이 푸른 하늘)",
        cover: "cover/43.jpg",
        source: "audio/43.恋キラリマジック☆彡.mp3"
      },
		{
        name: "무적 드리밍",
        artist: "치에루(CV:사쿠라 아야네), 클로에(CV:타네사키 아츠미), 유니(CV:오하라 호미)",
        cover: "cover/44.jpg",
        source: "audio/44.無敵ドリーミング.mp3"
      },
		{
        name: "오늘을 잡아라!",
        artist: "이노리 (후지타 아카네), 카야 (코이치 마코토), 호말레 (오니시 사오리)",
        cover: "cover/45.jpg",
        source: "audio/45.Seize The Day!.mp3"
      },
		{
        name: "너를위한 친구 행진곡",
        artist: "아오이(CV:하나자와 카나)",
        cover: "cover/46.jpg",
        source: "audio/46.ぼっちのためのトモダチ行進曲.mp3"
      },
		{
        name: "오직 오직 너만",
        artist: "(하시모토 치나미) ~ 에리코",
        cover: "cover/47.jpg",
        source: "audio/47.Only Only You.mp3"
      },
		{
        name: "저스트 모멘트!",
        artist: "노조미 (CV : 히카사 요코), 치카 (CV : 후쿠하라 아야카), 츠무기 (CV : 키토 이부키)",
        cover: "cover/48.jpg",
        source: "audio/48.ジャストアモーメント！.mp3"
      },
		{
        name: "자기애♡",
        artist: "유키(CV:오오쿠라 나오미)",
        cover: "cover/49.jpg",
        source: "audio/49.Narcistration♡.mp3"
      },
		{
        name: "할로윈 몬스터 잼!!!",
        artist: "카오리(CV:타카모리 나츠미), 스즈나(CV:우에사카 스미레), 니논(CV:사토 사토미)",
        cover: "cover/50.jpg",
        source: "audio/50.Halloween Monster Jam !!!.mp3"
      },
		{
        name: "욕심쟁이 사랑",
        artist: "이오(CV:이토 시즈), 시즈루(CV:이쿠텐메 히토미), 쿠우카(CV:나가츠마 쥬리)",
        cover: "cover/51.jpg",
        source: "audio/51.GREEDY LOVE.mp3"
      },
		{
        name: "푸딩이 최고야아아~!!",
        artist: "미야코 (CV : 아마미야 텐)",
        cover: "cover/52.jpg",
        source: "audio/52.ぷりん・あ・ら・くりすますなの!.mp3"
      },
		{
        name: "얼음 날개",
        artist: "셰피 (CV : 콘도 레나)",
        cover: "cover/53.jpg",
        source: "audio/53.Ice Wings.mp3"
      },
		{
        name: "비대칭 세계",
        artist: "페코린느 (CV : M · A · O), 캐릭터 (CV : 타치바나 리카)",
        cover: "cover/54.jpg",
        source: "audio/54.Asymmetric World.mp3"
      },
		{
        name: "뮤지컬이 들린다",
        artist: "쿠루미 (CV : 우에다 카나)",
        cover: "cover/55.jpg",
        source: "audio/55.ミュージカルが聴こえる.mp3"
      },
		{
        name: "비밀 그리움",
        artist: "아유미 (CV : 오세키 에이리)",
        cover: "cover/56.jpg",
        source: "audio/56.Secret Longing.mp3"
      },
	    {
        name: "GIRLS' LEGEND U",
        artist: "Various Artists",
        cover: "cover/57.jpg",
        source: "audio/57. GIRLS' LEGEND U.mp3"
      },
	    {
        name: "NEXT FRONTIER",
        artist: "Various Artists",
        cover: "cover/58.jpg",
        source: "audio/58. NEXT FRONTIER.mp3"
      },
	    {
        name: "본능 속도",
        artist: "Various Artists",
        cover: "cover/59.jpg",
        source: "audio/59. 本能スピード.mp3"
      },
	    {
        name: "시작 시그널",
        artist: "Various Artists",
        cover: "cover/60.jpg",
        source: "audio/60. はじまりのSignal.mp3"
      },
	    {
        name: "데자뷰",
        artist: "데이브 로저스",
        cover: "cover/61.jpg",
        source: "audio/61.Dave Rodgers - Deja Vu.mp3"
      },
	    {
        name: "사랑에 빠지다",
        artist: "다비치(davichi)",
        cover: "cover/62.jpg",
        source: "audio/62.davichi-falling-in-love.mp3"
      },
	    {
        name: "이터널 블레이즈",
        artist: "미즈키 나나",
        cover: "cover/63.jpg",
        source: "audio/63.ETERNAL BLAZE.mp3"
      },
	    {
        name: "고양이 소리를 따라해보자",
        artist: "Raon Lee",
        cover: "cover/64.jpg",
        source: "audio/64.Say Meow MeowCover by Raon Lee.mp3"
      },
	    {
        name: "RE _ WIND",
        artist: "이세계 아이돌",
        cover: "cover/65.jpg",
        source: "audio/65.RE _ WIND.mp3"
      },
	      {
        name: "겨울봄",
        artist: "이세계 아이돌",
        cover: "cover/66.jpg",
        source: "audio/66.Winter Spring.mp3"
      },
	      {
        name: "이슈칸 커뮤니케이션",
        artist: "쪼로곤즈",
        cover: "cover/67.jpg",
        source: "audio/67.イシュカン・コミュニケーション.mp3"
      },
	      {
        name: "푸른 하늘의 랩소디 - 슈퍼 곤즈 ver",
        artist: "슈퍼 쪼로곤즈",
        cover: "cover/68.jpg",
        source: "audio/68.青空のラプソディ - スーパーちょろゴンず ver.mp3"
      },
	      {
        name: "시작 세츠나",
        artist: "왁스 학원 중등부 1년 3조",
        cover: "cover/69.jpg",
        source: "audio/69.はじまりのセツナ.mp3"
      },
	      {
        name: "아스트로소녀",
        artist: "구주쿠 사명, Snail's House",
        cover: "cover/70.jpg",
        source: "audio/70.Astrogirl.mp3"
      },
	      {
        name: "즐거운 MEOW날!!",
        artist: "토키 노 소라",
        cover: "cover/71.jpg",
        source: "audio/71.Happy Meowthday!!.mp3"
      },
	      {
        name: "너를 느끼고, 너를 치유해",
        artist: "힐러걸스",
        cover: "cover/72.jpg",
        source: "audio/72.Feel You, Heal You.mp3"
      },
	      {
        name: "あすいろ ClearSky",
        artist: "홀로라이브 아이돌 프로젝트",
        cover: "cover/73.jpg",
        source: "audio/73.あすいろClearSky.mp3"
      },
	      {
        name: "Say! 황팔레!",
        artist: "시라카미 후부키",
        cover: "cover/74.jpg",
        source: "audio/74.Say!ファンファーレ!.mp3"
      },
	      {
        name: "환상적인 몽상가",
        artist: "마치코",
        cover: "cover/75.jpg",
        source: "audio/75.fantastic dreamer.mp3"
      },
	      {
        name: "내일",
        artist: "마치코",
        cover: "cover/76.jpg",
        source: "audio/76.TOMORROW.mp3"
      },
	      {
        name: "REFLECT",
        artist: "가우르 구라",
        cover: "cover/77.jpg",
        source: "audio/77.REFLECT.mp3"
      },
	      {
        name: "비밀 사랑 코코로",
        artist: "HoneyWorks와 함께하는 치코",
        cover: "cover/78.jpg",
        source: "audio/78.ヒミツ恋ゴコロ.mp3"
      },
	      {
        name: "드래곤 나이트",
        artist: "헬로 해피 월드!",
        cover: "cover/79.jpg",
        source: "audio/79.Dragon Night.mp3"
      },
	      {
        name: "팝핀 캔디 ☆ 발열!",
        artist: "키노시타, 우나 오토마치, 린 카가미네",
        cover: "cover/80.jpg",
        source: "audio/80.ポッピンキャンディ☆フィーバー!.mp3"
      },
	      {
        name: "비 주문 Original ver",
        artist: "Kobo Kanaeru",
        cover: "cover/81.jpg",
        source: "audio/81.Mantra Hujan.mp3"
      },
	      {
        name: "비 주문 Rakakun- ver",
        artist: "Rakakun-",
        cover: "cover/82.jpg",
        source: "audio/82.Mantra Hujan.mp3"
      },
	      {
        name: "고백 번지 점프",
        artist: "halca",
        cover: "cover/83.jpg",
        source: "audio/83.告白バンジージャンプ.mp3"
      },
	      {
        name: "말할 수 없다",
        artist: "MIMiNARI, asmi",
        cover: "cover/84.jpg",
        source: "audio/84.言えない.mp3"
      },
	      {
        name: "스텔라 스텔라",
        artist: "Hoshimachi Suisei",
        cover: "cover/85.jpg",
        source: "audio/85.Stellar Stellar.mp3"
      },
	      {
        name: "Fleur",
        artist: "雪花ラミィ",
        cover: "cover/86.jpg",
        source: "audio/86.Fleur.mp3"
      },
	      {
        name: "NEXT COLOR PLANET",
        artist: "Hoshimachi Suisei",
        cover: "cover/87.jpg",
        source: "audio/87.NEXT COLOR PLANET.mp3"
      },
	      {
        name: "스타가디언 2022",
        artist: "리그 오브 레전드",
        cover: "cover/88.jpg",
        source: "audio/88.Star Guardian 2022 - Official Orchestral Theme.mp3"
      },
	      {
        name: "여행 의 계절 -Eng ver-",
        artist: "Mari Usagi, Xpresso",
        cover: "cover/89.jpg",
        source: "audio/89.Tabidachi no Kisetsu - English Version - Lofi with Vocals (Princess Connect! Re_ Dive Season 2 Endin.mp3"
      },
	      {
        name: "RE:LATION",
        artist: "에밀리아(CV:타카하시 리의), 렘(CV:미나세 이노리), 람(CV:무라카와 리의)",
        cover: "cover/90.jpg",
        source: "audio/90.Re_lation.mp3"
      },
	      {
        name: "花の塔",
        artist: "Sayuri",
        cover: "cover/91.jpg",
        source: "audio/91.花の塔.mp3"
      },
	      {
        name: "OVER",
        artist: "ISEGYE IDOL",
        cover: "cover/93.jpg",
        source: "audio/93.이세계 아이돌 OVER.mp3"
      },
	      {
        name: "KIDDING",
        artist: "ISEGYE IDOL",
        cover: "cover/94.jpg",
        source: "audio/94.KIDDING.mp3"
      },
	      {
        name: "Coming soon",
        artist: "업데이트 예정입니다..",
        cover: "cover/92.jpg",
        source: "audio/92.Coming soon.mp3"
      },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "cover"
      document.head.appendChild(link)
    }
  }
});
