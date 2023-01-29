import MainLayout from "../../layout/main";

export default function Tamu() {
    return (
        <div className="">
            Tamu
        </div>
    );
}

Tamu.getLayout = function getLayout(page) {
    return (
      <MainLayout>
        {page}
      </MainLayout>
    )
  }