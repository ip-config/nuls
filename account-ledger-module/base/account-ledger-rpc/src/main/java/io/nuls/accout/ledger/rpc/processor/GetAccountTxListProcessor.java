package io.nuls.accout.ledger.rpc.processor;

import io.nuls.account.constant.AccountErrorCode;
import io.nuls.account.ledger.model.TransactionInfo;
import io.nuls.account.ledger.service.AccountLedgerService;
import io.nuls.core.tools.cmd.CommandBuilder;
import io.nuls.core.tools.crypto.Base58;
import io.nuls.kernel.model.Result;
import io.nuls.kernel.model.Transaction;
import io.nuls.kernel.processor.CommandProcessor;

import java.util.List;

public class GetAccountTxListProcessor implements CommandProcessor {

    private AccountLedgerService accountLedgerService;

    @Override
    public String getCommand() {
        return "gettxlist";
    }

    @Override
    public String getHelp() {
        CommandBuilder bulider = new CommandBuilder();
        bulider.newLine(getCommandDescription())
                .newLine("\t<address>   address -required")
                .newLine("\t[txType]    transaction type -default 0")
                .newLine("\t<start>     start -required")
                .newLine("\t<limit>     limit -required");
        return bulider.toString();
    }

    @Override
    public String getCommandDescription() {
        return "gettxlist <address> <start> <limit> --get the transaction information list by address";
    }

    @Override
    public boolean argsValidate(String[] args) {
        int length = args.length;
        if (!(length == 3 || length == 4)) {
            return false;
        }


        if (args.length == 3) {
            try {
                Integer.parseInt(args[1]);
                Integer.parseInt(args[2]);
            } catch (Exception e) {
                return false;
            }
        } else {
            try {
                Integer.parseInt(args[1]);
                Integer.parseInt(args[2]);
                Integer.parseInt(args[3]);
            } catch (Exception e) {
                return false;
            }
        }

        return true;
    }

    @Override
    public Result execute(String[] args) {
        Result dtoResult = Result.getSuccess();
        byte[] addressBytes = null;
        int type = 0;
        int start = 0;
        int limit = 0;

        try {
            addressBytes = Base58.decode(args[0]);
        } catch (Exception e) {
            return Result.getFailed(AccountErrorCode.ADDRESS_ERROR);
        }

        if (args.length == 3) {
            start = Integer.parseInt(args[1]);
            limit = Integer.parseInt(args[2]);
        } else {
            type = Integer.parseInt(args[1]);
            start = Integer.parseInt(args[2]);
            limit = Integer.parseInt(args[3]);
        }

        Result<List<TransactionInfo>> rawResult = accountLedgerService.getTxInfoList(addressBytes);
        if (rawResult.isFailed()) {
            dtoResult.setSuccess(false);
            dtoResult.setErrorCode(rawResult.getErrorCode());
            return dtoResult;
        }
        List<TransactionInfo> infoList = rawResult.getData();
        if (type != 0) {
            for (int i = infoList.size() - 1; i >= 0; i--) {
                if (infoList.get(i).getTxType() != type) {
                    infoList.remove(i);
                }
            }
        }

        if (start > infoList.size() || infoList.size() == 0) {
            return dtoResult;
        }
        int end = start + limit;
        if (end > infoList.size()) {
            end = infoList.size();
        }

        infoList = infoList.subList(start, end);
        dtoResult.setData(infoList);
        return dtoResult;
    }
}