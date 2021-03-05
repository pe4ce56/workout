const workouts = {
  beginer: [
    {
      id: 'stomatch',
      title: 'Otot Perut',
      img: require('../../assets/image/thumbnail/stomatch-workout.jpg'),
      data: [
        {
          title: 'Loncat Bintang',
          repetitions: '00:20',
          gif: require('../../assets/gif/stomatch/loncat_bintang.gif'),
        },
        {
          title: 'Crunch Perut',
          repetitions: 'x16',
          gif: require('../../assets/gif/stomatch/crunch.gif'),
        },
        {
          title: 'Puntir Rusia',
          repetitions: 'x20',
          gif: require('../../assets/gif/stomatch/russian_twist.gif'),
        },
        {
          title: 'Pendaki Gunung',
          repetitions: 'x16',
          gif: require('../../assets/gif/stomatch/pendaki_gunung.gif'),
        },
        {
          title: 'Sentuh Tumit',
          repetitions: 'x20',
          gif: require('../../assets/gif/stomatch/sentuh_tumit.gif'),
        },
        {
          title: 'Angkat Kaki',
          repetitions: 'x16',
          gif: require('../../assets/gif/stomatch/angkat_kaki.gif'),
        },
        {
          title: 'Plank',
          repetitions: '00:30',
          gif: require('../../assets/gif/stomatch/plank.gif'),
        },
      ],
    },
    {
      id: 'chest',
      title: 'Otot Dada',
      img: require('../../assets/image/thumbnail/chest-workout.jpg'),
      data: [
        {
          title: 'Loncat Bintang',
          repetitions: '00:30',
          gif: require('../../assets/gif/stomatch/loncat_bintang.gif'),
        },
        {
          title: 'Push Up Tangan Di Atas Bangku',
          repetitions: 'x16',
          gif: require('../../assets/gif/push-up-bangku.gif'),
        },
        {
          title: 'Push Up Lutut',
          repetitions: 'x12',
          gif: require('../../assets/gif/push-up-lutut.gif'),
        },
        {
          title: 'Push Up',
          repetitions: 'x10',
          gif: require('../../assets/gif/push-up.gif'),
        },
        {
          title: 'Push Up Tangan Melebar',
          repetitions: 'x10',
          gif: require('../../assets/gif/push-up-tangan-melebar.gif'),
        },
      ],
    },
    {
      id: 'arm',
      title: 'Otot lengan',
      img: require('../../assets/image/thumbnail/arm-workout.jpg'),
      data: [
        {
          title: 'Loncat Bintang',
          repetitions: '00:30',
          gif: require('../../assets/gif/stomatch/loncat_bintang.gif'),
        },
        {
          title: 'Angkat Tangan Sambil Berdiri',
          repetitions: '00:30',
          gif: require('../../assets/gif/angkat-lengan-atas.gif'),
        },
        {
          title: 'Angkat Tangan Ke Samping',
          repetitions: '00:30',
          gif: require('../../assets/gif/angkat-lengan-samping.gif'),
        },
        {
          title: 'Tricip Dip',
          repetitions: 'x10',
          gif: require('../../assets/gif/tricip-dip.gif'),
        },
        {
          title: 'Putar Lengan Searah Jarum Jam',
          repetitions: '00:30',
          gif: require('../../assets/gif/putar-lengan.gif'),
        },
        {
          title: 'Putar Lengan Berlawanan Arah Jarum Jam',
          repetitions: '00:30',
          gif: require('../../assets/gif/tricip-dip.gif'),
        },
        {
          title: 'Push Up Berlian',
          repetitions: 'x16',
          gif: require('../../assets/gif/diamon-pushup.gif'),
        },
        {
          title: 'Meninju',
          repetitions: '00:30',
          gif: require('../../assets/gif/meninju.gif'),
        },
        {
          title: 'Diagonal Plank',
          repetitions: 'x10',
          gif: require('../../assets/gif/diagonal-plank.gif'),
        },
        {
          title: 'Push Up',
          repetitions: 'x10',
          gif: require('../../assets/gif/push-up.gif'),
        },
        {
          title: 'Inchworms',
          repetitions: 'x8',
          gif: require('../../assets/gif/inchworm.gif'),
        },
        {
          title: 'Peregangan Tricep',
          repetitions: '01:00',
          gif: require('../../assets/gif/Triceps-Stretch-w-Bend-1.gif'),
        },
      ],
    },
    {
      id: 'leg',
      title: 'Otot Kaki',
      img: require('../../assets/image/thumbnail/leg-workout.jpg'),
      data: [
        {
          title: 'Loncat Samping',
          repetitions: '00:30',
          gif: require('../../assets/gif/loncat-samping.gif'),
        },
        {
          title: 'Squat',
          repetitions: 'x24',
          gif: require('../../assets/gif/squat.gif'),
        },
        {
          title: 'Angkat Kaki Sambil Berbaring Kiri',
          repetitions: 'x24',
          gif: require('../../assets/gif/angkat-kaki-berbaring-kiri.gif'),
        },
        {
          title: 'Angkat Kaki Sambil Berbaring Kanan',
          repetitions: 'x24',
          gif: require('../../assets/gif/angkat-kaki-berbaring-kanan.gif'),
        },
        {
          title: 'Terjang Maju',
          repetitions: 'x28',
          gif: require('../../assets/gif/terjang-maju.gif'),
        },
        {
          title: 'Peregangan Lutut Ke Dada Kiri',
          repetitions: '00:30',
          gif: require('../../assets/gif/peregangan-lutut.gif'),
        },
        {
          title: 'Peregangan Lutut Ke Dada Kanan',
          repetitions: '00:30',
          gif: require('../../assets/gif/peregangan-lutut.gif'),
        },

        {
          title: 'Jongkok Sumo',
          repetitions: 'x24',
          gif: require('../../assets/gif/jongkok-sumo.gif'),
        },
      ],
    },
    {
      id: 'shoulder',
      title: 'Otot Bahu & Punggung',
      img: require('../../assets/image/thumbnail/shoulder-workout.jpg'),
      data: [
        {
          title: 'Angkat Tangan Sambil Berdiri',
          repetitions: 'x16',
          gif: require('../../assets/gif/angkat-lengan-atas.gif'),
        },
        {
          title: 'Loncat Bintang',
          repetitions: '00:30',
          gif: require('../../assets/gif/stomatch/loncat_bintang.gif'),
        },
        {
          title: 'Angkat Tangan Ke Samping',
          repetitions: 'x16',
          gif: require('../../assets/gif/angkat-lengan-samping.gif'),
        },
        {
          title: 'Push Up Lutut ',
          repetitions: 'x14',
          gif: require('../../assets/gif/push-up-lutut.gif'),
        },
        {
          title: 'Push Up Tricep Telungkup',
          repetitions: 'x14',
          gif: require('../../assets/gif/pushup-tricep-telungkup.gif'),
        },
      ],
    },
  ],
};

export default workouts;
