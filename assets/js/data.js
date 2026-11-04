/*
 * FILE DỄ CHỈNH NHẤT: thay tên web, chuyên mục, bài viết tại đây.
 * Tất cả nội dung dưới đây là BÀI MINH HỌA, không phải tin thời sự đã kiểm chứng.
 */
window.SITE = {
  name: 'BẢN TIN MỘC',
  brandMain: 'BẢN TIN',  // Chữ thường màu đen trên logo
  brandAccent: 'MỘC.', // Chữ đỏ gạch trên logo
  shortName: 'MỘC.',
  tagline: 'Đọc chậm một chút. Hiểu sâu hơn một chút.',
  description: 'Một không gian đọc tin, kể chuyện và chia sẻ góc nhìn với phong cách editorial vintage.',
  useOnlinePhotos: true, // false = dùng 100% tranh minh họa SVG trong thư mục assets/images.
  categories: [
    { slug:'thoi-su', name:'Thời sự', description:'Những vấn đề đang được quan tâm, dưới góc nhìn bình tĩnh và có chiều sâu.' },
    { slug:'doi-song', name:'Đời sống', description:'Từ phố xá đến những thay đổi nhỏ trong cuộc sống thường ngày.' },
    { slug:'giao-duc', name:'Giáo dục', description:'Lớp học, người trẻ và những câu hỏi về học tập suốt đời.' },
    { slug:'van-hoa', name:'Văn hóa', description:'Con người, phong tục, nghệ thuật và những giá trị sống cùng thời gian.' },
    { slug:'cong-nghe', name:'Công nghệ', description:'Công nghệ không chỉ là máy móc, mà còn là câu chuyện của con người.' },
    { slug:'kinh-te', name:'Kinh tế', description:'Ý tưởng, công việc và những chuyển động của đời sống kinh tế.' },
    { slug:'goc-nhin', name:'Góc nhìn', description:'Những bài viết nêu câu hỏi, khơi mở đối thoại và giúp nhìn vấn đề đa chiều.' },
    { slug:'moi-truong', name:'Môi trường', description:'Lối sống xanh và mối quan hệ của chúng ta với thiên nhiên.' },
    { slug:'du-lich', name:'Du lịch', description:'Đi, nhìn, lắng nghe và mang về nhiều hơn những tấm ảnh.' },
    { slug:'suc-khoe', name:'Sức khỏe', description:'Cách chăm sóc bản thân, cộng đồng và chất lượng sống.' },
    { slug:'giai-tri', name:'Giải trí', description:'Nghệ thuật đại chúng, phim ảnh và những chủ đề thư giãn.' },
    { slug:'the-thao', name:'Thể thao', description:'Tin tức và các câu chuyện thể thao.' }
  ]
};

window.PHOTOS = {
 city: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=82',
 city2: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1400&q=82',
 education: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=82',
 culture: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&q=82',
 coffee: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1400&q=82',
 green: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=82',
 work: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=82',
 health: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=82',
 finance: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=82',
 camera: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1400&q=82',
 community: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=82',
 books: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1400&q=82'
};

/* Để thêm bài: sao chép một đối tượng {...} bên dưới, đổi id KHÔNG TRÙNG, title, category,
   excerpt, image và body. Mỗi phần tử trong body là một đoạn văn riêng. */
window.ARTICLES = [
{
 id:'ha-noi-khoang-lang',category:'doi-song',label:'Tiêu điểm',featured:true,views:980,
 title:'Hà Nội qua những khoảng lặng giữa nhịp sống mới',
 excerpt:'Giữa các con đường đông đúc, thành phố vẫn giữ lại những khoảng lặng vừa đủ để con người tìm thấy một nhịp riêng.',
 author:'Ban biên tập',date:'2026-11-03',image:'city',reading:5,
 body:[
 'Có những thành phố được nhớ bằng đường chân trời, cũng có những thành phố được nhớ bằng âm thanh của một buổi sớm. Hà Nội trong bài viết minh họa này là những ngõ nhỏ, cửa hàng quen và khoảnh khắc ta chợt muốn đi chậm hơn.',
 'Đời sống đô thị không chỉ là các tòa nhà mới hay nhịp giao thông hối hả. Nó còn nằm trong thói quen gặp gỡ, cách mọi người chia sẻ một khoảng sân và cả những hoạt động tưởng chừng bình thường.',
 'Khi đặt câu hỏi về một thành phố đáng sống, có lẽ điều đầu tiên cần quan sát không phải tốc độ của sự thay đổi, mà là những gì người dân có thể gìn giữ trong quá trình ấy.',
 'Bài viết này là nội dung giả lập phục vụ thiết kế website. M có thể thay bằng bài báo hoặc bài phân tích thật đã được kiểm chứng nguồn trước khi xuất bản.'
 ]
},
{
 id:'nguoi-tre-khong-gian-hoc',category:'giao-duc',featured:true,views:790,
 title:'Người trẻ và những không gian học tập ngoài giảng đường',
 excerpt:'Một quán cà phê, thư viện hay góc làm việc chung cũng có thể trở thành lớp học khi sự tò mò được đặt đúng chỗ.',
 author:'Minh An',date:'2026-11-02',image:'education',reading:4,
 body:['Việc học ngày nay có thể diễn ra ở nhiều không gian khác nhau. Điều thay đổi không chỉ là địa điểm, mà còn là cách người học tự chủ động chọn tài liệu và cộng đồng đồng hành.','Một không gian học tốt không nhất thiết phải thật yên tĩnh. Quan trọng hơn là nó khuyến khích tập trung, trao đổi ý tưởng và nuôi dưỡng thói quen đặt câu hỏi.','Đối với người trẻ, khả năng quản lý thời gian và học tập suốt đời là hành trang có giá trị vượt ra ngoài những kỳ thi.']
},
{
 id:'ca-phe-cau-chuyen-van-hoa',category:'van-hoa',featured:true,views:730,
 title:'Khi một tách cà phê trở thành câu chuyện văn hóa',
 excerpt:'Đằng sau hương vị quen thuộc là ký ức, nhịp sống và những cuộc gặp gỡ khó thay thế.',
 author:'Hà Vy',date:'2026-11-01',image:'coffee',reading:4,
 body:['Một thức uống có thể trở thành ngôn ngữ của đời sống thường nhật. Cà phê là một ví dụ: người ta tìm đến vì hương vị, nhưng nhiều khi ở lại vì câu chuyện.','Từ những cuộc hẹn ngắn đến buổi làm việc kéo dài, quán cà phê cho thấy cách không gian công cộng thay đổi cùng thế hệ sử dụng nó.','Trong bối cảnh nhịp sống liên tục dịch chuyển, những thói quen nhỏ giúp chúng ta nhận diện một phần bản sắc đô thị.']
},
{
 id:'sang-tao-trong-thoi-ai',category:'cong-nghe',featured:true,views:715,
 title:'Công nghệ tạo sinh đang thay đổi cách chúng ta sáng tạo',
 excerpt:'Công cụ mới mở ra khả năng thử nghiệm nhanh hơn, nhưng tư duy phản biện và trách nhiệm với nội dung vẫn là cốt lõi.',
 author:'Khánh Linh',date:'2026-10-31',image:'work',reading:6,
 body:['Công nghệ tạo sinh đang được thảo luận trong nhiều công việc sáng tạo, từ thiết kế đến biên tập và giáo dục. Khả năng tạo bản nháp nhanh có thể hữu ích, nhưng không thay thế hoàn toàn quá trình chọn lọc.','Người dùng cần xác minh thông tin, tôn trọng quyền tác giả và minh bạch về vai trò của công cụ trong sản phẩm cuối cùng.','Câu hỏi có lẽ không chỉ là công nghệ làm được gì, mà còn là chúng ta muốn giữ lại phần trách nhiệm nào cho con người.']
},
{
 id:'goc-pho-cu',category:'van-hoa',featured:true,views:635,
 title:'Những góc phố cũ được kể lại bằng ngôn ngữ mới',
 excerpt:'Khi ký ức kiến trúc bước vào nhiếp ảnh, minh họa và các câu chuyện số.',
 author:'Quỳnh Chi',date:'2026-10-30',image:'city2',reading:5,
 body:['Một mái hiên, chiếc cửa gỗ hay biển hiệu cũ đôi khi mang theo nhiều lớp ký ức hơn vẻ bề ngoài của nó.','Người trẻ có thể kể lại những chi tiết ấy bằng ảnh, tranh minh họa, podcast và dự án lưu trữ số. Mỗi phương thức góp thêm một cách tiếp cận di sản.','Sự tôn trọng với bối cảnh và con người trong câu chuyện vẫn cần đặt trước mong muốn tạo ra một hình ảnh đẹp.']
},
{
 id:'pho-di-bo',category:'doi-song',views:602,
 title:'Thiết kế đô thị: Dành thêm không gian cho người đi bộ',
 excerpt:'Một vỉa hè dễ đi và một hàng cây mát cũng có thể thay đổi trải nghiệm sống trong thành phố.',
 author:'Ban biên tập',date:'2026-10-29',image:'city',reading:4,
 body:['Khi quan sát một khu phố từ tầm mắt người đi bộ, ta có thể nhận ra nhiều vấn đề nhỏ nhưng thiết thực: chỗ sang đường, bóng râm và sự liền mạch của vỉa hè.','Thiết kế đô thị thân thiện không chỉ phục vụ việc di chuyển. Nó còn giúp các cuộc gặp gỡ và hoạt động cộng đồng trở nên dễ dàng hơn.','Một thành phố hướng đến con người cần lắng nghe nhu cầu của nhiều nhóm sử dụng không gian, kể cả trẻ em và người có khó khăn trong di chuyển.']
},
{
 id:'lop-hoc-tuong-lai',category:'giao-duc',views:551,
 title:'Trường học tương lai: Học để đặt câu hỏi tốt hơn',
 excerpt:'Kiến thức vẫn quan trọng, nhưng năng lực tự học, hợp tác và kiểm chứng thông tin đang trở nên thiết yếu.',
 author:'Thảo Nguyên',date:'2026-10-28',image:'books',reading:5,
 body:['Một câu hỏi hay có thể mở ra cả một hướng học tập mới. Thay vì chỉ lặp lại câu trả lời, người học cần được khuyến khích giải thích vì sao mình tin vào một kết luận.','Giáo viên có thể đóng vai trò người thiết kế trải nghiệm học tập, tạo cơ hội cho học sinh trao đổi và phản hồi lẫn nhau.','Công cụ số hỗ trợ việc học khi được sử dụng có mục đích, thay vì trở thành lối tắt né tránh suy nghĩ.']
},
{
 id:'khu-vuon-song-xanh',category:'moi-truong',views:503,
 title:'Từ một khu vườn nhỏ đến ý thức sống xanh',
 excerpt:'Thay đổi lớn đôi khi bắt đầu bằng việc quan sát nơi mình sống và chăm sóc một khoảng xanh rất nhỏ.',
 author:'Bảo Trâm',date:'2026-10-27',image:'green',reading:4,
 body:['Một khu vườn nhỏ có thể là nơi con người học lại cách quan sát mùa, thời tiết và chu kỳ sinh trưởng của cây.','Những hành động xanh trong sinh hoạt chỉ thật sự bền vững khi phù hợp điều kiện thực tế và được duy trì lâu dài.','Điều thú vị không nằm ở việc làm mọi thứ thật hoàn hảo, mà ở khả năng xây dựng thói quen cùng gia đình và hàng xóm.']
},
{
 id:'giu-nhip-cong-dong',category:'thoi-su',views:474,
 title:'Một ngày của những người giữ nhịp cộng đồng',
 excerpt:'Lắng nghe những công việc thầm lặng góp phần kết nối đời sống thường ngày.',
 author:'Hoài Nam',date:'2026-10-26',image:'community',reading:5,
 body:['Trong một cộng đồng, có nhiều công việc không xuất hiện ở trung tâm của những câu chuyện lớn, nhưng lại quan trọng với sinh hoạt hằng ngày.','Bài viết minh họa này gợi mở cách kể chuyện từ góc nhìn của người trực tiếp tham gia, thay vì chỉ quan sát kết quả cuối cùng.','Lắng nghe đủ lâu có thể giúp ta thấy được những nỗ lực nhỏ tạo thành sự gắn kết.']
},
{
 id:'may-anh-va-nhip-cham',category:'van-hoa',views:452,
 title:'Khi máy ảnh chậm lại giữa một thế giới vội',
 excerpt:'Nhiếp ảnh không nhất thiết là khoảnh khắc thật nhanh; đôi lúc, đó là nghệ thuật quan sát thật lâu.',
 author:'Lê Hoàng',date:'2026-10-25',image:'camera',reading:4,
 body:['Máy ảnh có thể ghi lại một khoảnh khắc, nhưng việc lựa chọn khung hình đòi hỏi người chụp hiểu điều mình muốn kể.','Khi chú ý đến ánh sáng, cử chỉ và mối quan hệ giữa con người với bối cảnh, mỗi bức ảnh sẽ trở thành một lời diễn giải.','Bức ảnh có trách nhiệm không chỉ đẹp; nó còn cần tôn trọng nhân vật và hoàn cảnh được ghi lại.']
},
{
 id:'doc-sau-thoi-thong-bao',category:'goc-nhin',views:438,
 title:'Đọc sâu trong thời đại của những thông báo ngắn',
 excerpt:'Chúng ta có thể giữ khả năng tập trung thế nào khi mỗi phút đều có điều gì đó muốn giành lấy sự chú ý?',
 author:'Ngọc Anh',date:'2026-10-24',image:'books',reading:6,
 body:['Thông tin đến nhanh mang lại tiện lợi, nhưng sự hiểu biết thường cần nhiều hơn một cú lướt qua tiêu đề.','Đọc sâu là một kỹ năng: đặt câu hỏi về nguồn, phân biệt dữ kiện với ý kiến và sẵn sàng xem xét quan điểm trái chiều.','Có thể bắt đầu bằng những khoảng thời gian ngắn không bị ngắt quãng, rồi tăng dần theo thói quen riêng.']
},
{
 id:'kinh-doanh-cong-dong',category:'kinh-te',views:407,
 title:'Những ý tưởng kinh doanh bắt đầu từ cộng đồng',
 excerpt:'Một nhu cầu rất đời thường có thể trở thành điểm khởi đầu cho dịch vụ có ích.',
 author:'Gia Hân',date:'2026-10-23',image:'finance',reading:5,
 body:['Một ý tưởng kinh doanh tốt thường bắt đầu từ việc hiểu rõ ai đang gặp khó khăn gì và giải pháp hiện tại chưa đáp ứng ra sao.','Thay vì vội mở rộng, nhóm triển khai có thể thử nghiệm ở quy mô nhỏ và lắng nghe phản hồi.','Sự bền vững của mô hình không chỉ được đo bằng tăng trưởng, mà còn bằng giá trị thực dành cho người sử dụng.']
},
{
 id:'du-lich-cham',category:'du-lich',views:386,
 title:'Du lịch chậm và cách nhìn mới về những vùng đất quen',
 excerpt:'Ít điểm đến hơn, nhưng nhiều câu chuyện và sự kết nối hơn.',
 author:'Phương Linh',date:'2026-10-22',image:'green',reading:4,
 body:['Du lịch chậm không đơn thuần là kéo dài thời gian chuyến đi. Đó còn là cách dành sự chú ý cho con người, cảnh quan và văn hóa bản địa.','Thay vì chạy theo một danh sách địa điểm, người đi có thể lựa chọn một hành trình vừa sức và để không gian cho trải nghiệm bất ngờ.','Sự tôn trọng môi trường và cộng đồng địa phương nên là một phần tự nhiên trong mỗi lựa chọn.']
},
{
 id:'y-te-trai-nghiem',category:'suc-khoe',views:359,
 title:'Đổi mới y tế nhìn từ trải nghiệm của người bệnh',
 excerpt:'Ngôn ngữ rõ ràng, quy trình dễ hiểu và thái độ lắng nghe giúp tạo nên một trải nghiệm chăm sóc tốt hơn.',
 author:'Ban biên tập',date:'2026-10-21',image:'health',reading:5,
 body:['Khi nói đến cải thiện dịch vụ y tế, công nghệ thường thu hút sự chú ý. Tuy nhiên, trải nghiệm của người bệnh còn phụ thuộc vào việc thông tin có dễ hiểu hay không.','Một quy trình được giải thích rõ ràng có thể giúp người sử dụng dịch vụ tự tin hơn trong việc chuẩn bị và đặt câu hỏi.','Nội dung bài viết chỉ mang tính minh họa thiết kế, không phải tư vấn y khoa.']
},
{
 id:'tac-gia-tre',category:'van-hoa',views:332,
 title:'Các tác giả trẻ đang kể câu chuyện của mình',
 excerpt:'Những hình thức kể chuyện mới làm phong phú thêm cách chúng ta chia sẻ ký ức và tưởng tượng.',
 author:'Hà Vy',date:'2026-10-20',image:'culture',reading:5,
 body:['Kể chuyện là hoạt động quen thuộc, nhưng mỗi thế hệ lại tìm thấy những chất liệu và phương tiện mới.','Một câu chuyện có thể xuất hiện trong trang sách, video ngắn, tranh vẽ hay sân khấu nhỏ. Hình thức thay đổi không khiến nhu cầu đồng cảm mất đi.','Điều làm một tiếng nói trở nên đáng nhớ vẫn là cách tác giả quan sát và thành thật với trải nghiệm.']
},
{
 id:'thanh-pho-khoang-xanh',category:'moi-truong',views:300,
 title:'Thành phố và câu hỏi về những khoảng xanh',
 excerpt:'Không gian xanh có ý nghĩa như thế nào đối với nhịp sống và những cuộc gặp gỡ cộng đồng?',
 author:'Minh An',date:'2026-10-19',image:'green',reading:5,
 body:['Cây xanh trong thành phố góp phần tạo bóng mát và mang lại cảm giác dễ chịu cho nhiều người sử dụng không gian.','Để một khoảng xanh thực sự có ích, cần nhìn cả cách tiếp cận, sự an toàn và hoạt động có thể diễn ra tại đó.','Quy hoạch vì thế là câu chuyện về trải nghiệm của con người, không chỉ là những khoảng màu trên bản vẽ.']
},
{
 id:'ky-nang-so-nghe-nghiep',category:'giao-duc',views:288,
 title:'Những cánh cửa nghề nghiệp từ năng lực số',
 excerpt:'Biết sử dụng công cụ là bước đầu; biết lựa chọn, kiểm chứng và làm việc cùng người khác mới là điều tạo khác biệt.',
 author:'Thảo Nguyên',date:'2026-10-18',image:'work',reading:4,
 body:['Năng lực số không chỉ là thao tác thành thạo một phần mềm. Nó còn bao gồm tìm kiếm, đánh giá và tổ chức thông tin.','Trong môi trường làm việc, khả năng cộng tác, học công cụ mới và hiểu các giới hạn của công nghệ thường có giá trị dài hạn.','Một lộ trình học tốt nên kết hợp thực hành với tư duy phản biện và trách nhiệm số.']
},
{
 id:'tuong-lai-hop-tac',category:'kinh-te',views:277,
 title:'Tương lai việc làm nhìn từ kỹ năng hợp tác',
 excerpt:'Kỹ năng phối hợp, trao đổi và hiểu vai trò của nhau giúp những nhóm làm việc tiến xa hơn.',
 author:'Khánh Linh',date:'2026-10-17',image:'community',reading:4,
 body:['Một dự án tốt thường đòi hỏi nhiều loại chuyên môn và quan điểm. Công cụ có thể tăng tốc độ xử lý, nhưng sự phối hợp giữa con người vẫn quyết định chất lượng lựa chọn.','Kỹ năng hợp tác không phải việc đồng ý với mọi ý kiến, mà là khả năng trao đổi khác biệt một cách có cấu trúc.','Vì thế, môi trường học tập và công việc nên dành chỗ cho phản hồi, điều chỉnh và học hỏi lẫn nhau.']
}
];


/* PODCAST: Điền title, description và audioUrl HTTPS của tệp audio do nhóm sở hữu.
   Khi chưa có audioUrl, giao diện sẽ ghi rõ là CHƯA CÓ TẬP. */
window.PODCASTS = [];
