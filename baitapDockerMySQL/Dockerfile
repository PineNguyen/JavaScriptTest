FROM node:20

# Tạo thư mục làm việc trong container
WORKDIR /appMysql

# Copy package.json và cài đặt dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ mã nguồn
COPY . .

# Chạy ứng dụng Node.js
CMD ["node", "src/server.js"]
