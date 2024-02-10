FROM  golang:1.22-alpine3.19 AS Builder

WORKDIR /app

COPY . .

RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux go build -o challange .

FROM  scratch
COPY --from=Builder /app/challange .

CMD ["./challange"]


