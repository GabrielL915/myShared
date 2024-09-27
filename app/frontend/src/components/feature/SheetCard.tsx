const SheetCard = () => {
    return (
        <div className="flex items-center p-4 bg-gray-900 text-white">
            <img
                src="https://placehold.co/40x40"
                alt="Profile picture"
                className="w-10 h-10 rounded-full mr-4"
            />
            <div>
                <div className="flex items-center">
                    <a href="#" className="text-blue-400 hover:underline">
                        GabrielL915
                    </a>
                    <span className="mx-1">/</span>
                    <a href="#" className="text-blue-400 hover:underline">
                        repository.ts
                    </a>
                </div>
                <div className="text-gray-500">Last active 2 weeks ago</div>
                <div className="text-gray-500">Repository interface</div>
            </div>
            <div className="ml-auto flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 3H3v18h18V8h-8V3h-3V0h11v24H0V0h7v3zM16.414 8H13V4.586L16.414 8z"/>
                </svg>
                <span className="text-gray-500">2 files</span>
            </div>
        </div>
    );
};

export default SheetCard;
