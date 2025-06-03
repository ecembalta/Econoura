import { Clock, LineChart, ChevronRight } from "lucide-react";

export default function PostCard({
  image,
  category,
  tags,
  title,
  description,
  date,
  comments,
}) {
  return (
    <div className="bg-white shadow-md overflow-hidden md:w-[340px] w-[348px] h-[606px] max-w-sm mx-auto flex flex-col">
      <div className="relative">
        <img
          src={image}
          alt="Post görseli"
          className="w-full h-[300px] object-cover"
        />
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
          NEW
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex space-x-4 text-sm mb-2">
          <span className="text-blue-400 font-medium text-xs">{category}</span>
          {tags?.map((tag, i) => (
            <span key={i} className="text-gray-500 text-xs">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-[20px] font-normal text-primary text-left mb-4">
          {title}
        </h2>
        <p className="text-gray-500 text-[14px] font-normal mb-4 text-left">
          {description}
        </p>
        <div className="flex items-left justify-between text-gray-500 text-sm mb-4 mt-auto">
          <div className="flex items-left space-x-1">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-xs">{date}</span>
          </div>
          <div className="flex items-left space-x-1">
            <LineChart className="w-4 h-4 text-green-500 text-xs" />
            <span className="text-xs">{comments} comments</span>
          </div>
        </div>
        <a
          href="#"
          className="font-bold text-gray-500 flex items-center text-[14px] hover:text-blue-500 transition"
        >
          Learn More
          <ChevronRight className="w-4 h-4 text-blue-400" />
        </a>
      </div>
    </div>
  );
}
