echo you need to be logged into registry.redhat.io
echo run podman login registry.redhat.io  

#build website
cd sitesource
npm run build
cd ..

#build container
podman build -f Dockerfile-freshbuild -t ogs-dashboard:latest

#display container
podman images
