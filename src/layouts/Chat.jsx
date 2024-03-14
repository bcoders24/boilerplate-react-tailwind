import React, { useState } from "react";
import instance from "../api/instance";

function Chat() {
  const handleSubmit = async (e) => {
    setLoading(false);
    try {
      const response = await instance.post("/chat/completions", {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: data }],
      });

      const fromUser = {
        from: "You",
        message: data,
      };
      setArr((prev) => [...prev, fromUser]);

      const fromAi = {
        from: "ChatGpt",
        message: response.data.choices[0].message.content,
      };
      setArr((prev) => [...prev, fromAi]);

      // Clear input
      setData("");
    } catch (error) {
    } finally {
      setLoading(true);
    }
  };

  const [arr, setArr] = useState([]);
  const [data, setData] = useState("");
  const [buttonColor, setButtonColor] = useState("gray");
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setData(e.target.value);
    if (e.target.value.length > 0) {
      setButtonColor("black");
    } else {
      setButtonColor("gray");
    }
  };
  return (
    <div>
      <div className="flex h-screen flex-auto">
        <div className="flex flex-col flex-auto flex-shrink-0  rounded-2xl  h-full p-4">
          <h2 className="font-semibold text-md flex justify-start">ChatGPT</h2>
          <div className="flex flex-col h-full overflow-x-auto mt-10">
            {arr?.map((item) => {
              return (
                <div className="p-3 px-24">
                  <h1 className="font-semibold font-poppins text-md">
                    {item.from}
                  </h1>

                  <p className="text-sm">{item.message}</p>
                </div>
              );
            })}
          </div>

          <div className="ml-4">
            <div className="relative">
              <input
                type="url"
                id="website"
                class=" w-full text-sm border rounded-2xl focus:outline-none focus:border-gray-300 pl-4 h-12"
                placeholder="Message ChatGPT..."
                value={data}
                onChange={handleChange}
                required
              />
              {loading ? (
                <svg
                  onClick={handleSubmit}
                  style={{ backgroundColor: buttonColor }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7 absolute text-white   end-2.5 bottom-2.5 bg-gray-200  rounded-lg py-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </svg>
              ) : (
                <svg
                  onClick={handleSubmit}
                  style={{ backgroundColor: buttonColor }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7  absolute text-white animate-spin  end-2.5 bottom-2.5 bg-gray-200  rounded-lg py-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              )}
            </div>
            <p className="text-xs text-center mt-1">
              ChatGPT can make mistakes. Consider checking important
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chat;
