//seal-객체에 속성 추가하지 못하게 함
const album = {
    name: 'LOVE YOURSELF'
};

album.song = 'Euphoria';
album.singer = 'RM';

console.log(album);

Object.seal(album);

album.comment = 'Answer';
album.singer = 'JK';
delete album.name;

console.log(album);