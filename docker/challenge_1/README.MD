# Challange: Go image

## EN

This challenge is very exciting, especially if you have never worked with the Go language!
You will have to publish an image to docker hub. When we run:
docker run <your-user>/fullcycle
We must have the following result: Full Cycle Rocks!!
If you notice, this image only prints the message as a final result, so it's worth checking out Go Lang's website to learn how to say "hello world".
Remembering that Go Lang has official images ready, it is worth consulting Docker Hub. 3) The image of our Go project needs to be less than 2MB =)
Tip: In the introductory video about Docker when we talk about the layered file system, I present a "root" image, perhaps it would be a good idea to use it.
Upload the project to a remote Git repository and place the link to the image that was uploaded to Docker Hub.
Please share the remote Git repository link so we can fix your project.
Have a good time!

### RUN STEPS

- run directly form docker hub `docker run almirpask/fullcycle`
- build yourself: `docker build docker_fullcycle`
- run builded image: `docker run docker_fullcycle`

## PT

Esse desafio é muito empolgante principalmente se você nunca trabalhou com a linguagem Go!
Você terá que publicar uma imagem no docker hub. Quando executarmos:
docker run <seu-user>/fullcycle
Temos que ter o seguinte resultado: Full Cycle Rocks!!
Se você perceber, essa imagem apenas realiza um print da mensagem como resultado final, logo, vale a pena dar uma conferida no próprio site da Go Lang para aprender como fazer um "olá mundo".
Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub. 3) A imagem de nosso projeto Go precisa ter menos de 2MB =)
Dica: No vídeo de introdução sobre o Docker quando falamos sobre o sistema de arquivos em camadas, apresento uma imagem "raiz", talvez seja uma boa utilizá-la.
Suba o projeto em um repositório Git remoto e coloque o link da imagem que subiu no Docker Hub.
Compartilhe o link do repositório do Git remoto para corrigirmos seu projeto.
Divirta-se!

### Passos para execução

- executar diretamente do docker hub `docker run almirpask/fullcycle`
- build você mesmo: `docker build docker_fullcycle`
- executar imagem buildada: `docker run docker_fullcycle`
