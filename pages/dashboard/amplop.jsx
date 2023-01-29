import MainLayout from "../../layout/main";

export default function Amplop() {
    return (
        <div className="">
            Belum ada undangan.
        </div>
    );
}


Amplop.getLayout = function getLayout(page) {
    return (
      <MainLayout>
        {page}
      </MainLayout>
    )
  }