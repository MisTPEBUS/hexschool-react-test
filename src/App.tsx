import { useMemo, useState } from "react";

import "./App.css";

/* ### 實作題檢核點

1. 使用 useState 管理相片列表與標籤狀態
2. 能夠透過表單新增相片（包含圖片網址、標題、標籤），當標題、圖片網址、標籤其中一個欄位為空時，則無法新增相片
3. 新增相片後表單欄位會自動清空



/* 7. 點擊相片可顯示放大效果或詳細資訊 */

// 範例圖片資料（可選用）
type Photo = {
  id: number;
  url: string;
  title: string;
  tag: string;
};
const samplePhotos: Photo[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    title: "美麗山景",
    tag: "風景",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
    title: "美味料理",
    tag: "美食",
  },
];

const tags = ["全部", "風景", "美食", "人物", "其他"];

function App() {
  // TODO: 在這裡定義狀態與函式

  const [photo, setPhoto] = useState<Photo[]>(samplePhotos);
  const [searchUrl, setSearchUrl] = useState<string>("");
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("全部");

  const filterPhoto = useMemo(() => {
    if (category === "全部") return photo;

    return photo.filter(
      (item) => item.tag === category && item.url.includes(searchUrl),
    );
  }, [photo, category, searchTitle, searchUrl]);

  const handleUrlChange = (url: string) => {
    setSearchUrl(url);
  };
  const handleTitleChange = (Title: string) => {
    setSearchTitle(Title);
  };

  const handleSelectCategory = (tag: string) => {
    setCategory(tag);
    //filter
  };

  /*  const handleEditPhoto = (item: Photo) => {}; */

  /* 6. 能夠刪除特定的相片  */
  const handleRemovePhoto = (id: number) => {
    setPhoto((pre) => pre.filter((photo) => photo.id !== id));
  };
  /* 5. 標籤篩選功能正確運作（全部/風景/美食/人物/其他），在篩選後只顯示符合條件的相片 */

  return (
    <div className="container mx-auto max-w-6xl px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-700">
        📷 圖片相簿管理系統
      </h1>

      {/* 新增相片表單區塊 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">新增相片</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            value={searchUrl}
            onChange={(e) => handleUrlChange(e.target.value)}
            placeholder="圖片網址"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            value={""}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="相片標題"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <select
            value={""}
            onChange={(e) => handleSelectCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">選擇標籤</option>
            <option value="風景">風景</option>
            <option value="美食">美食</option>
            <option value="人物">人物</option>
            <option value="其他">其他</option>
          </select>
          <button
            onClick={() => {}}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            新增相片
          </button>
        </div>
      </div>

      {/* 標籤篩選區塊 */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {/* tags.map ... */}
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleSelectCategory(tag)}
              className={`px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors  ${category === tag ? "bg-purple-600 text-white" : ""}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 相片展示區塊 */}
      {/* 4. 能夠將相片渲染到畫面中（當相簿為空時，顯示適當的提示訊息） */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4 text-sm text-gray-600">
          目前相片數量：
          <span className="font-bold text-purple-600">
            {filterPhoto.length}
          </span>{" "}
          張
        </div>

        {/* 空狀態提示 */}
        {filterPhoto.length === 0 ? (
          <p className="text-center text-gray-400 py-8">
            目前沒有相片，趕快新增一張吧！
          </p>
        ) : (
          /* 相片顯示 */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filterPhoto.map((item) => (
              <div
                className="photo-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                key={item.id}
              >
                {/* 點擊圖片觸發 openModal */}
                <img
                  src={item.url}
                  alt={item.title}
                  /*  onClick={() => handleEditPhoto(item)} */
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                      {item.tag}
                    </span>
                    <button
                      onClick={() => handleRemovePhoto(item.id)}
                      className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
                    >
                      刪除
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/*
        Note：
          Modal 大圖顯示區塊，要實作此功能時，請將下方註解解除 
          點選 modal-overlay 也可關閉 Modal
      */}

      {/* <div className="modal-overlay" onClick={() => {}}>
				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
					<img
						src={
							"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
						}
						alt={"相片標題"}
						className="rounded-lg"
					/>
					<div className="bg-white p-4 mt-2 rounded-lg text-center">
						<h3 className="text-xl font-bold text-gray-800">相片標題</h3>
						<span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded inline-block mt-2">
							標籤
						</span>
						<button
							onClick={() => {}}
							className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors block mx-auto"
						>
							關閉
						</button>
					</div>
				</div>
			</div> */}
    </div>
  );
}

export default App;
